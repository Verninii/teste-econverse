import styles from "./styles.module.scss";
import { PartnerItem } from "./PartnerItem";

type Partner = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  imageUrl: string;
};

const partners: Partner[] = [
  {
    id: "p1",
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet,\nconsectetur",
    ctaLabel: "CONFIRA",
    imageUrl: "/Partner.png",
  },
  {
    id: "p2",
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet,\nconsectetur",
    ctaLabel: "CONFIRA",
    imageUrl: "/Partner.png",
  },
];

export function PartnersSection() {
  return (
    <section className={styles.section} aria-label="Parceiros">
      <div className={styles.container}>
        <div className={styles.grid}>
          {partners.map((p) => (
            <PartnerItem
              key={p.id}
              title={p.title}
              description={p.description}
              ctaLabel={p.ctaLabel}
              imageUrl={p.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
