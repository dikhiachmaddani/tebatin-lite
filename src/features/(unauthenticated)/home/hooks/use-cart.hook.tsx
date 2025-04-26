import { useEffect, useState } from "react";
import { addToCart, getCartFromLocalStorage, removeFromCart } from "../../../../modules/product/local-storage";
import { CartItem } from "../../../../modules/product/type";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => setCartItems(getCartFromLocalStorage()), []);

  const addToCartHandler = (item: CartItem) => {
    const updatedCart = addToCart(cartItems, item);
    setCartItems(updatedCart);
  };

  const removeFromCartHandler = (id: string) => {
    const updatedCart = removeFromCart(cartItems, id);
    setCartItems(updatedCart);
  };

  return {
    cartItems,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };
};