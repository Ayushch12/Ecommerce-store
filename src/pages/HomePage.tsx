import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Sample products with descriptions
    const sampleProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150', description: 'Description for product 1' },
      { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150', description: 'Description for product 2' },
      { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150', description: 'Description for product 3' },
      { id: 4, name: 'Product 4', price: 40, image: 'https://via.placeholder.com/150', description: 'Description for product 4' },
      { id: 5, name: 'Product 5', price: 50, image: 'https://via.placeholder.com/150', description: 'Description for product 5' },
      { id: 6, name: 'Product 6', price: 60, image: 'https://via.placeholder.com/150', description: 'Description for product 6' },
      { id: 7, name: 'Product 7', price: 70, image: 'https://via.placeholder.com/150', description: 'Description for product 7' },
      { id: 8, name: 'Product 8', price: 80, image: 'https://via.placeholder.com/150', description: 'Description for product 8' },
      { id: 9, name: 'Product 9', price: 90, image: 'https://via.placeholder.com/150', description: 'Description for product 9' },
      { id: 10, name: 'Product 10', price: 100, image: 'https://via.placeholder.com/150', description: 'Description for product 10' },
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
