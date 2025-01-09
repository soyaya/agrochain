import React from "react";

const Card = ({ image, icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
    {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />}
    {icon && <div className="text-blue-500 text-6xl mb-4">{icon}</div>}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
