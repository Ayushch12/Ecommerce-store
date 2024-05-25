
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import house from '../assets/House.jpeg'; // Ensure the correct path
import house1 from '../assets/House1.png'; // Ensure the correct path
import image1 from '../assets/image1.jpeg';
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
        <h1 className="text-2xl font-bold mb-4">Commande réussie ! Il sera livré dans 15 minutes à votre adresse.</h1>
        <p className="text-lg">Time remaining: {formatTime(timeLeft)}</p>
        {user && <p className="text-lg mt-4">Adresse de livraison : {user.address}</p>}
      </div>

      <div className="relative mt-8 h-64 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">E-commerce Store</h2>
          <img
            src={house}
            alt="House"
            className="h-36 w-38"
          />
        </div>
        <img
          src={image1}
          alt="Delivery Person"
          className="h-32 w-32 animate-move mx-8"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">Adresse de livraison</h2>
          <img
            src={house1}
            alt="House1"
            className="h-36 w-38"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
