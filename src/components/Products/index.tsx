import styles from "./styles.module.scss";
import type { EconverseProduct } from "../../types/econverse";
import { ProductItem } from "./ProductItem";
import { useEffect, useRef, useState } from "react";

type Tab = { id: string; label: string };

const defaultTabs: Tab[] = [
  { id: "celular", label: "CELULAR" },
  { id: "acessorios", label: "ACESSÓRIOS" },
  { id: "tablets", label: "TABLETS" },
  { id: "notebooks", label: "NOTEBOOKS" },
  { id: "tvs", label: "TVS" },
  { id: "all", label: "VER TODOS" },
];

type Props = {
  title: string;
  navbar?: boolean;
  tabs?: Tab[];
  products: EconverseProduct[];
  onProductClick?: (product: EconverseProduct) => void;
};

export function Products({
  title,
  navbar = false,
  tabs = defaultTabs,
  products,
  onProductClick,
}: Props) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const calc = () => {
      if (typeof window === "undefined") return 4;
      const w = window.innerWidth;
      if (w < 600) return 1;
      if (w < 900) return 2;
      if (w < 1200) return 3;
      return 4;
    };

    const update = () => setPerView(calc());
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const max = Math.max(0, products.length - perView);
    setIndex((prev) => Math.min(prev, max));
  }, [perView, products.length]);

  const maxIndex = Math.max(0, products.length - perView);

  const scrollToIndex = (i: number) => {
    const ul = listRef.current;
    if (!ul) return;

    const firstCard = ul.querySelector("li");
    if (!firstCard) return;

    const cardWidth = (firstCard as HTMLElement).getBoundingClientRect().width;

    const stylesUl = window.getComputedStyle(ul);
    const gap = parseFloat(stylesUl.columnGap || stylesUl.gap || "22") || 22;

    ul.scrollTo({ left: i * (cardWidth + gap), behavior: "smooth" });
  };

  const prev = () => {
    const nextIndex = Math.max(0, index - 1);
    setIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const next = () => {
    const nextIndex = Math.min(maxIndex, index + 1);
    setIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.line} aria-hidden="true" />
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.line} aria-hidden="true" />
        </header>

        {navbar ? (
          <nav className={styles.tabs} aria-label="Categorias de produtos">
            <ul className={styles.tabList}>
              {tabs.map((t, idx) => (
                <li key={t.id} className={styles.tabItem}>
                  <button
                    type="button"
                    className={`${styles.tabBtn} ${
                      idx === 0 ? styles.tabActive : ""
                    }`}
                  >
                    {t.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <div className={styles.onlyViewAll}>
            <button type="button" className={styles.viewAll}>
              Ver todos
            </button>
          </div>
        )}

        <div className={styles.carouselWrap}>
          <button
            className={styles.arrowLeft}
            aria-label="Anterior"
            type="button"
            onClick={prev}
            disabled={index === 0}
          >
            ‹
          </button>

          <ul
            className={styles.grid}
            aria-label="Lista de produtos"
            ref={listRef}
          >
            {products.map((p) => (
              <ProductItem
                key={p.productName}
                product={p}
                onClick={onProductClick}
              />
            ))}
          </ul>

          <button
            className={styles.arrowRight}
            aria-label="Próximo"
            type="button"
            onClick={next}
            disabled={index === maxIndex}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
