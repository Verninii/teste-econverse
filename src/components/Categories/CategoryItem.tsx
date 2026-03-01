import styles from "./styles.module.scss";

export type Category = {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
};

type Props = {
  category: Category;
  onClick?: (category: Category) => void;
};

export function CategoryItem({ category, onClick }: Props) {
  return (
    <li className={styles.item}>
      <button
        type="button"
        className={`${styles.card} ${category.active ? styles.active : ""}`}
        onClick={() => onClick?.(category)}
        aria-label={category.label}
      >
        <img
          className={styles.icon}
          src={category.icon}
          alt=""
          aria-hidden="true"
        />
      </button>

      <span
        className={`${styles.label} ${
          category.active ? styles.labelActive : ""
        }`}
      >
        {category.label}
      </span>
    </li>
  );
}
