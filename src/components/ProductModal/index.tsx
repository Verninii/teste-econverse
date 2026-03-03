import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import type { EconverseProduct } from "../../types/econverse";
import formatBRL from "../../helpers/FormatBRL";

type Props = {
  open: boolean;
  product: EconverseProduct | null;
  onClose: () => void;
};

export function ProductModal({ open, product, onClose }: Props) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (open) setQty(1);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !product) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Detalhes do produto"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <button
          className={styles.close}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>

        <div className={styles.content}>
          <div className={styles.left}>
            <img
              className={styles.image}
              src={product.photo}
              alt={product.productName}
            />
          </div>

          <div className={styles.right}>
            <h5 className={styles.name}>{product.productName}</h5>
            <p className={styles.price}>{formatBRL(product.price)}</p>

            <p className={styles.desc}>
              Many desktop publishing packages and web page editors now many
              desktop publishing
            </p>
            <p
              className={styles.seeMore}
            >{`Veja mais detalhes do produto >`}</p>

            <div className={styles.actions}>
              <div className={styles.stepper}>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className={styles.less}
                >
                  –
                </button>
                <span>{String(qty).padStart(2, "0")}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className={styles.plus}
                >
                  +
                </button>
              </div>

              <button className={styles.buy} type="button">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
