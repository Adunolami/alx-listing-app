import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => (
  <div className="border p-4 rounded-lg">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
    <h2 className="font-bold text-lg">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
