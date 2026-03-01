import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";
import { useProducts } from "./hooks/useProducts";
import { PartnersSection } from "./components/Partners";
import { BrandsSection } from "./components/Brands";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { useState } from "react";

import type { EconverseProduct } from "./types/econverse";
import { ProductModal } from "./components/ProductModal";

export default function App() {
  const { products } = useProducts();
  const [selected, setSelected] = useState<EconverseProduct | null>(null);

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Products
        navbar={true}
        products={products}
        title="Produtos relacionados"
        onProductClick={(p) => setSelected(p)}
      />
      <PartnersSection />
      <Products
        title="Produtos"
        products={products}
        onProductClick={(p) => setSelected(p)}
      />
      <PartnersSection />
      <BrandsSection />
      <Products
        navbar={false}
        products={products}
        title="Produtos relacionados"
        onProductClick={(p) => setSelected(p)}
      />
      <ProductModal
        open={!!selected}
        product={selected}
        onClose={() => setSelected(null)}
      />
      <Newsletter />
      <Footer />
    </>
  );
}
