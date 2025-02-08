"use client";

import React, { useState, useEffect } from "react";
import { getCartItem } from "../actions/actions";
import { Products } from "../products/page";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [cartItems, setCartItem] = useState<Products[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValue] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    address: false,
    city: false,
    zipCode: false,
  });

  useEffect(() => {
    setCartItem(getCartItem());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = subTotal - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      phoneNumber: !formValues.phoneNumber,
      email: !formValues.email,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

 const handlePlaceOrder = async () => {
  if (validateForm()) {
    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "Return to Home",
    });
  } else {
    Swal.fire({
      title: "Form Incomplete",
      text: "Please fill in all required fields.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return; // Stop execution if validation fails
  }

  const orderData = {
    _type: "order",
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    phoneNumber: formValues.phoneNumber,
    email: formValues.email,
    address: formValues.address,
    city: formValues.city,
    zipCode: formValues.zipCode,
    cartItems: cartItems.map((item) => ({
      _type: "reference",
      _ref: item._id,
    })),
    total: total,
    status: "pending",
    discount: discount,
    orderDate: new Date().toISOString(), // Corrected to call the method
  };

  try {
    await client.create(orderData); // Save order to Sanity
    // Remove cart from localStorage
    localStorage.removeItem("appliedDiscount"); // Remove discount as well

    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      // Optionally redirect after order is placed
      window.location.href = "/";
    });
  } catch (error) {
    console.error("Error creating order:", error);
    Swal.fire({
      title: "Order Failed",
      text: "There was an issue placing your order. Please try again.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

  
  

  // if (validateForm()) {
  //   Swal.fire({
  //     title: "Order Placed!",
  //     text: "Your order has been placed successfully.",
  //     icon: "success",
  //     confirmButtonText: "Return to Home" ,
  //   });
  //   localStorage.removeItem("appliedDiscount");
  // } else {
  //   alert("Please fill in all required fields.");
  // }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#008fb2]">CHECKOUT</h1>

      {/* Cart Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
        {cartItems.length > 0 ? (
          <ul className="divide-y">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-md" />
                <span>{item.title}</span>
                <span>£{item.price} x {item.inventory}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="mt-4">
          <p>Subtotal: £{subTotal.toFixed(2)}</p>
          <p>Discount: £{discount.toFixed(2)}</p>
          <p className="font-bold">Total: £{total.toFixed(2)}</p>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${
                  formErrors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">First name is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${
                  formErrors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm">Last name is required.</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter phone number"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                formErrors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.phoneNumber && (
              <p className="text-red-500 text-sm">Phone number is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">Valid email is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formValues.address}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                formErrors.address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.address && (
              <p className="text-red-500 text-sm">Address is required.</p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${
                  formErrors.city ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.city && (
                <p className="text-red-500 text-sm">City is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${
                  formErrors.zipCode ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.zipCode && (
                <p className="text-red-500 text-sm">Zip Code is required.</p>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
