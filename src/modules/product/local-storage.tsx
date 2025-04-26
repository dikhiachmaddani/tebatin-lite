import { CartItem } from "./type";

export const getCartFromLocalStorage = (): CartItem[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
};

export const saveCartToLocalStorage = (cart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((cartItem) => cartItem.id === item.id);
    if (existingProduct) existingProduct.quantity += 1;
    else updatedCart.push(item);
    saveCartToLocalStorage(updatedCart);
    return updatedCart;
};

export const removeFromCart = (cart: CartItem[], id: string): CartItem[] => {
    const updatedCart = cart.filter((item) => item.id !== id);
    saveCartToLocalStorage(updatedCart);
    return updatedCart;
};