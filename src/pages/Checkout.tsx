import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { cart, setCart } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOrderPlaced) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOrderPlaced]);

  const handleOrder = () => {
    setIsOrderPlaced(true);
    setCart([]); // Clear the cart
  };

  useEffect(() => {
    if (timeLeft === 0) {
      navigate('/'); // Navigate to home page after timer ends
    }
  }, [timeLeft, navigate]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="container mx-auto p-4">
      {isOrderPlaced ? (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <h1 className="text-2xl font-bold mb-4">Congratulations, you have successfully ordered!</h1>
          <p className="text-gray-500 dark:text-gray-400">You will be redirected to the homepage in {formatTime(timeLeft)}.</p>
        </div>
      ) : (
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
                </div>
              ))}
              <div className="mt-4">
                <button
                  onClick={handleOrder}
                  className="mt-4 w-full text-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700"
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
