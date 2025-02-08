"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCartItem } from "../actions/actions"; // Cart items fetch karne ke liye

const LowerHeader = () => {
  const [cartCount, setCartCount] = useState(0);

  // Update cart count based on localStorage whenever it changes
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = getCartItem();
      setCartCount(cartItems.length);
    };

    // Update count initially and on every page load
    updateCartCount();

    // Listen for changes in localStorage
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <div className="bg-slate-200 h-20">
      <div className="flex items-center justify-between max-w-7xl h-full mx-auto px-4 py-4">
        <div className="flex-shrink-0">
          <img src="/img/Logo.png" alt="Logo" className="w-28 sm:w-36" />
        </div>

        {/* Cart Section */}
        <div className="relative w-32 h-11 bg-slate-200 flex justify-between items-center px-4 rounded-sm">
          <img src="/img/buy1.png" alt="Cart Icon" className="w-6 h-6" />
          <button className="text-sm font-medium">
            <Link href="/carts">Cart</Link>
          </button>

          {/* Cart Count Badge */}
          {cartCount > 0 && (
            <div className="absolute top-0 right-0 w-5 h-5 bg-slate-800 text-white text-center text-sm rounded-full">
              {cartCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LowerHeader;
