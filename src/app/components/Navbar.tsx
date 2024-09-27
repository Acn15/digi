"use client";
import { useCartStore } from "@/store/useStore";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import CartModal from "./CartModa";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const cartCount = useCartStore((state) => state.cart.length);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-2xl font-bold text-blue-600">Digi</a>

          <div className="relative">
            <button onClick={openModal} className="flex items-center">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
