"use client";
import useProducts from "./hooks/useProducts";
import ProductList from "./components/ProductList";

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">Produtos</h1>
      <ProductList products={products} />
    </div>
  );
}
