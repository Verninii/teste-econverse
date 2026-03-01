import styles from "./styles.module.scss";

type Props = {
  imageUrl: string;
  name: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function BrandItem({ imageUrl, name, onClick, isActive }: Props) {
  return (
    <button
      type="button"
      className={`${styles.brandItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      aria-label={name}
    >
      <img className={styles.brandLogo} src={imageUrl} alt={name} />
    </button>
  );
}
