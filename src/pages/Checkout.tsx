import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        {cart.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">${item.price} x {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 dark:text-red-400"
                >
                  ❌
                </button>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-lg font-medium text-gray-900 dark:text-white">Total: ${total.toFixed(2)}</p>
              <button className="mt-4 w-full text-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700">
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;

