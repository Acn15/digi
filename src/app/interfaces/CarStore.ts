import { Product } from "./Products";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

export type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
