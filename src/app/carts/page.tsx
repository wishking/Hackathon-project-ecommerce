"use client";

import React, { useState, useEffect } from "react";
import { getCartItem, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    setCartItems([...getCartItem()]); // Ensure state updates correctly
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems([...getCartItem()]); // Update state properly
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems([...getCartItem()]); // Ensure UI updates
  };

  const handleIncrement = (id: string) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) =>
        item._id === id ? { ...item, inventory: item.inventory + 1 } : item
      );
      updateCartQuantity(id, updatedCart.find((i) => i._id === id)?.inventory || 1);
      return updatedCart;
    });
  };

  const handleDecrement = (id: string) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) =>
        item._id === id && item.inventory > 1 ? { ...item, inventory: item.inventory - 1 } : item
      );
      updateCartQuantity(id, updatedCart.find((i) => i._id === id)?.inventory || 1);
      return updatedCart;
    });
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };
 const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        router.push("/checkout")
        setCartItems([]);
        
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <h1 className="text-2xl font-semibold mb-6">Your Bag</h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="flex gap-4">
                  <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-md" />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm">Size: {item.size}</p>
                          <div className="flex items-center space-x-2">
                            <button
                              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                              onClick={() => handleDecrement(item._id)}
                            >
                              ➖
                            </button>
                            <span className="px-4 py-2 border">{item.inventory}</span>
                            <button
                              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                              onClick={() => handleIncrement(item._id)}
                            >
                              ➕
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="font-semibold">MRP: ${item.price}</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button className="text-gray-600 hover:text-gray-800">❤️</button>
                      <button className="text-red-500 hover:text-red-700" onClick={() => handleRemove(item._id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${calculatedTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${calculatedTotal().toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600 transition-colors" onClick={handleProceed}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
