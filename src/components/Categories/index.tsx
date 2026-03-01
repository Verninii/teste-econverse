import styles from "./styles.module.scss";
import { CategoryItem, type Category } from "./CategoryItem";

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

type Props = {
  onCategoryClick?: (category: Category) => void;
};

export function Categories({ onCategoryClick }: Props) {
  return (
    <section className={styles.section} aria-label="Categorias">
      <div className={styles.container}>
        <ul className={styles.list}>
          {categories.map((c) => (
            <CategoryItem key={c.id} category={c} onClick={onCategoryClick} />
          ))}
        </ul>
      </div>
    </section>
  );
}
