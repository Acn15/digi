"use client";
import { useCartStore } from "@/store/useStore";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { CartItem, CartModalProps } from "../interfaces/CarStore";
import { useState } from "react";

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [isPurchased, setIsPurchased] = useState(false);

  if (!isOpen) return null;

  const total = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  const handlePurchase = () => {
    setIsPurchased(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">Carrinho</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        {isPurchased ? (
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-green-600">
              Parabéns pela compra!
            </h2>
            <p className="mt-2">Seu pedido foi processado com sucesso.</p>
            <button
              onClick={onClose}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Fechar
            </button>
          </div>
        ) : (
          <div className="mt-4">
            {cart.length === 0 ? (
              <p className="text-center">O carrinho está vazio</p>
            ) : (
              <>
                <ul className="divide-y divide-gray-200">
                  {cart.map((product: CartItem) => (
                    <li
                      key={product.id}
                      className="py-4 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 object-cover rounded mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            R${product.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">
                            Quantidade: {product.quantity}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="text-right text-lg font-bold">
                    Total: R${total}
                  </p>
                </div>

                <div className="mt-4 flex justify-end space-x-4">
                  <button
                    onClick={handlePurchase}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Comprar
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Fechar
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
