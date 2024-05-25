import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleProceedToCheckout = () => {
    clearCart();
    navigate('/checkout');
  };

  // Check if the current path is '/checkout'
  const isCheckoutPage = location.pathname === '/checkout';

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">E-commerce Store</Link>
        <div className="flex items-center relative">
          {user && !isCheckoutPage && (
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="text-white relative"
            >
              Cart ({cart.length})
            </button>
          )}
          {isCartOpen && user && !isCheckoutPage && (
            <div className="fixed right-0 mt-12 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4 max-h-64 overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
                ) : (
                  cart.map((item) => (
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
                  ))
                )}
              </div>
              <div className="p-4 bg-gray-100 border-t border-gray-200">
                <button
                  onClick={handleProceedToCheckout}
                  className="block w-full text-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
          {!user ? (
            <Link to="/login" className="ml-4 text-white">Login</Link>
          ) : (
            <Link to="/logout" className="ml-4 text-white">Logout</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
