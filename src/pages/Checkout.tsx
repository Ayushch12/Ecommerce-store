

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleMapPin from '../assets/google_map_pin.png'; // Add this image to your assets folder
import image1 from '../assets/image1.jpeg'; // Adjust the path as necessary
import { useAuth } from '../context/AuthContext';

const Checkout: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const navigate = useNavigate();
  const { user } = useAuth(); // Get user from AuthContext

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate('/');
    }
  }, [timeLeft, navigate]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <h1 className="text-2xl font-bold mb-4">Successfully Ordered! It will be delivered in 15 minutes to your address.</h1>
        <p className="text-lg">Time remaining: {formatTime(timeLeft)}</p>
        {user && <p className="text-lg mt-4">Delivery Address: {user.address}</p>}
      </div>

      <div className="relative mt-8 h-64">
        <img
          src={image1}
          alt="Delivery Person"
          className="absolute left-0 bottom-0 h-32 w-32 animate-move"
        />
        <img
          src={googleMapPin}
          alt="Google Map Pin"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-16"
        />
      </div>
    </div>
  );
};

export default Checkout;
