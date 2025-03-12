import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-5 shadow-md">
      <div className="container mx-auto flex justify-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          🎬 Trending Movies 🎥
        </h1>
      </div>
    </header>
  );
};

export default Header;
