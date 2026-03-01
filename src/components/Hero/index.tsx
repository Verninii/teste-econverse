import styles from "./styles.module.scss";

type Props = {
  title?: string;
  subtitleBold?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export function Hero({
  title = "Venha conhecer nossas promoções",
  subtitleBold = "50% Off",
  subtitle = "nos produtos",
  ctaLabel = "Ver produto",
  onCtaClick,
}: Props) {
  return (
    <section className={styles.hero} aria-label="Banner principal">
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.subtitle}>
            <strong className={styles.subtitleStrong}>{subtitleBold}</strong>{" "}
            {subtitle}
          </p>

          <button
            type="button"
            className={styles.cta}
            onClick={onCtaClick}
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
