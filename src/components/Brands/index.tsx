import styles from "./styles.module.scss";
import { BrandItem } from "./BrandItem";

type Brand = {
  id: string;
  name: string;
  imageUrl: string;
  isActive?: boolean;
};

const brands: Brand[] = [
  { id: "b1", name: "Econverse", imageUrl: "/logo.png", isActive: true },
  { id: "b2", name: "Econverse", imageUrl: "/logo.png", isActive: true },
  { id: "b3", name: "Econverse", imageUrl: "/logo.png", isActive: false },
  { id: "b4", name: "Econverse", imageUrl: "/logo.png", isActive: false },
  { id: "b5", name: "Econverse", imageUrl: "/logo.png", isActive: false },
];

export function BrandsSection() {
  return (
    <section className={styles.section} aria-label="Navegue por marcas">
      <div className={styles.container}>
        <h2 className={styles.title}>Navegue por marcas</h2>

        <div className={styles.grid}>
          {brands.map((b) => (
            <BrandItem
              key={b.id}
              name={b.name}
              imageUrl={b.imageUrl}
              isActive={b.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
