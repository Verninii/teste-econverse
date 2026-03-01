import styles from "./styles.module.scss";
import type { EconverseProduct } from "../../types/econverse";
import formatBRL from "../../helpers/FormatBRL";

type Props = {
  product: EconverseProduct;
  onClick?: (product: EconverseProduct) => void;
};

export function ProductItem({ product, onClick }: Props) {
  return (
    <li className={styles.card}>
      <button
        type="button"
        className={styles.cardBtn}
        onClick={() => onClick?.(product)}
        aria-label={`Abrir ${product.productName}`}
      >
        <div className={styles.imageWrap}>
          <img
            className={styles.image}
            src={product.photo}
            alt={product.productName}
          />
        </div>

        <p className={styles.descName}>{product.productName}</p>
        <p className={styles.desc}>{product.descriptionShort}</p>

        <p className={styles.price}>{formatBRL(product.price)}</p>
        <p className={styles.interest}>ou 2x de R$ 49,95 sem juros</p>
        <p className={styles.free}>Frete grátis</p>

        <span className={styles.buyBtn}>COMPRAR</span>
      </button>
    </li>
  );
}
