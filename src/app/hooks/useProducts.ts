import { useEffect, useState } from "react";
import { Product } from "../interfaces/Products";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { products, loading, error };
}
