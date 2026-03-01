import styles from "./styles.module.scss";

type Category = {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
};

const categories: Category[] = [
  {
    id: "tech",
    label: "Tecnologia",
    icon: "/categories/TechCategories.png",
    active: true,
  },
  {
    id: "market",
    label: "Supermercado",
    icon: "/categories/SuperMarketCategories.png",
  },
  { id: "drinks", label: "Bebidas", icon: "/categories/DrinksCategories.png" },
  {
    id: "tools",
    label: "Ferramentas",
    icon: "/categories/ToolsCategories.png",
  },
  { id: "health", label: "Saúde", icon: "/categories/HealthCategories.png" },
  {
    id: "sports",
    label: "Esportes e Fitness",
    icon: "/categories/FitnessCategories.png",
  },
  { id: "fashion", label: "Moda", icon: "/categories/FashionCategories.png" },
];

export function Categories() {
  return (
    <section className={styles.section} aria-label="Categorias">
      <div className={styles.container}>
        <ul className={styles.list}>
          {categories.map((c) => (
            <li key={c.id} className={styles.item}>
              <button
                type="button"
                className={`${styles.card} ${c.active ? styles.active : ""}`}
                aria-label={c.label}
              >
                <img
                  className={styles.icon}
                  src={c.icon}
                  alt=""
                  aria-hidden="true"
                />
              </button>

              <span
                className={`${styles.label} ${c.active ? styles.labelActive : ""}`}
              >
                {c.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
