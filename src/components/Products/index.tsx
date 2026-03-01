import styles from "./styles.module.scss";
import type { EconverseProduct } from "../../types/econverse";
import { ProductItem } from "./ProductItem";

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
                    className={`${styles.tabBtn} ${idx === 0 ? styles.tabActive : ""}`}
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
          >
            ‹
          </button>

          <ul className={styles.grid} aria-label="Lista de produtos">
            {products.slice(0, 4).map((p) => (
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
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
