import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, image, price, onClick }) => {
  return (
    <div
      className="flex flex-col border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={image || '/assets/placeholder.png'}
          alt={title || 'Property image'}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
