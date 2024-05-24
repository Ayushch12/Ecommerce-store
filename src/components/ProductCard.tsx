import React from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
