import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/image1.jpeg'; // Adjust the path as necessary

const Checkout: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const navigate = useNavigate();

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
        <h1 className="text-2xl font-bold mb-4">Commandé avec succès ! Il sera livré en 15 minutes à votre adresse.</h1>
        <p className="text-lg">Time remaining: {formatTime(timeLeft)}</p>
      </div>

      <div className="mt-8">
        <img src={image1} alt="Order Confirmation" className="mx-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Checkout;
