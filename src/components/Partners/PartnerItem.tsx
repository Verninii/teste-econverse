import styles from "./styles.module.scss";

type Props = {
  title: string;
  description: string;
  ctaLabel: string;
  imageUrl: string;
  onClick?: () => void;
};

export function PartnerItem({
  title,
  description,
  ctaLabel,
  imageUrl,
  onClick,
}: Props) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={imageUrl} alt="" aria-hidden="true" />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{description}</p>

        <button type="button" className={styles.button} onClick={onClick}>
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}
