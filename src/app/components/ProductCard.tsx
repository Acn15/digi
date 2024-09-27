"use client";
import { useCartStore } from "@/store/useStore";
import { Product } from "../interfaces/Products";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-blue-600">
            R${product.price}
          </span>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
