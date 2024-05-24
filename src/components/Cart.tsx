import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-screen-sm bg-white rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-medium text-gray-900 dark:text-white">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
      ) : (
        <div>
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
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-medium text-gray-900 dark:text-white">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" className="mt-4 inline-block w-full text-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
