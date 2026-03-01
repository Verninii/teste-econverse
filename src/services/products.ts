import type { EconverseProductsResponse } from "../types/econverse";

const PRODUCTS_URL =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export async function fetchProducts(signal?: AbortSignal) {
  const res = await fetch(PRODUCTS_URL, { signal });

  if (!res.ok) {
    throw new Error(`Erro ao buscar produtos: ${res.status}`);
  }

  const data = (await res.json()) as EconverseProductsResponse;

  if (!data.success) {
    throw new Error("API retornou success=false");
  }

  return data.products;
}
