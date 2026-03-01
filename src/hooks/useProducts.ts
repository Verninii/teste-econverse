import { useEffect, useState } from "react";
import type { EconverseProduct } from "../types/econverse";
import { fetchProducts } from "../services/products";

export function useProducts() {
  const [products, setProducts] = useState<EconverseProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchProducts(controller.signal);
        setProducts(data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  return { products, loading, error };
}
