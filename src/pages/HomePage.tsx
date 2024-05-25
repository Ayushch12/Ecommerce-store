import React, { useEffect, useState } from 'react';
import product1 from '../assets/product1.png';
import product10 from '../assets/product10.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png';
import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Sample products with descriptions
    const sampleProducts: Product[] = [
      { id: 1, name: 'Chipster', price: 3.5, image: product1, description: 'Description for Chipster Maman' },
      { id: 2, name: 'Croustilles emmental', price: 2.8, image: product2, description: 'Description for Croustilles ' },
      { id: 3, name: 'Bière blonde 5,5%', price: 5, image: product3, description: 'Description for Bière blonde 5,5%' },
      { id: 4, name: 'Crème Entière', price: 1.56, image: product4, description: 'Description for Crème Entière' },
      { id: 5, name: 'Flocons davoine', price: 5.9, image: product5, description: 'Description for Flocons davoine' },
      { id: 6, name: 'Flocons davoine', price: 25, image: product6, description: 'Description for Flocons davoine' },
      { id: 7, name: 'Ananas Extra', price: 6, image: product7, description: 'Description for Ananas Extra' },
      { id: 8, name: 'Bonne Maman', price: 4.7, image: product8, description: 'Description for Bonne Maman' },
      { id: 9, name: 'chocolat bonbon', price: 6.9, image: product9, description: 'Description for chocolat' },
      { id: 10, name: 'Cookies chocolat', price: 5.8, image: product10, description: 'Description for Cookies chocolat' },
      { id: 11, name: 'Flocons davoine', price: 5.9, image: product5, description: 'Description for Flocons davoine' },
      { id: 12, name: 'Flocons davoine', price: 25, image: product6, description: 'Description for Flocons davoine' },
      { id: 13, name: 'Ananas Extra', price: 6, image: product7, description: 'Description for Ananas Extra' },
      { id: 14, name: 'Bonne Maman', price: 4.7, image: product8, description: 'Description for Bonne Maman' },
      { id: 15, name: 'chocolat bonbon', price: 6.9, image: product9, description: 'Description for chocolat' },
      { id: 16, name: 'Cookies chocolat', price: 5.8, image: product10, description: 'Description for Cookies chocolat' },
      { id: 17, name: 'Chipster', price: 3.5, image: product1, description: 'Description for Chipster Maman' },
      { id: 18, name: 'Croustilles emmental', price: 2.8, image: product2, description: 'Description for Croustilles ' },
      { id: 19, name: 'Bière blonde 5,5%', price: 5, image: product3, description: 'Description for Bière blonde 5,5%' },
      { id: 20, name: 'Crème Entière', price: 1.56, image: product4, description: 'Description for Crème Entière' },
      { id: 21, name: 'Flocons davoine', price: 5.9, image: product5, description: 'Description for Flocons davoine' },
      { id: 22, name: 'Flocons davoine', price: 25, image: product6, description: 'Description for Flocons davoine' }
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-2 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded-lg" />
            <h2 className="text-lg font-bold mb-1">{product.name}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <p className="text-gray-500 mb-2 text-sm">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700"
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
