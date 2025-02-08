import { Products } from "../products/page";

export const addToCart = (product: Products) => {
  const cart: Products[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProductIndex = cart.findIndex(item => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].inventory += 1;
  } else {
    cart.push({ ...product, inventory: 1 });
  }

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Dispatch storage event to notify the update
  window.dispatchEvent(new Event("storage"));
};

export const removeFromCart = (productId: string) => {
  let cart: Products[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter(item => item._id !== productId);

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Dispatch storage event to notify the update
  window.dispatchEvent(new Event("storage"));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Products[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex(item => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCartItem = (): Products[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

