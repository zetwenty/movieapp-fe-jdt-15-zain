import React from "react";
import { Movie } from "../../services/type";

interface CardProps {
  data: Movie;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { original_title, original_name, poster_path } = data;
  return (
    <div className="relative flex flex-col bg-gray-900 text-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Poster */}
      <img
        className="w-full h-56 md:h-130 object-cover"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title ?? original_name}
      />

      {/* Text Section */}
      <div className="p-3">
        <h1 className="text-lg font-bold line-clamp-1">
          {original_title ?? original_name}
        </h1>
        <p className="text-gray-400 text-sm">2025</p>
      </div>
    </div>
  );
};

export default Card;
