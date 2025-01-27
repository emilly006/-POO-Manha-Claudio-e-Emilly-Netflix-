import './Carrossel.js'


import React from "react";
import { FaNetflix } from "react-icons/fa";

const ImageWithLogo = () => {
  return (
    <div className="image-container">
      <img
        className="background-image"
        src="your-image-url.jpg" // Substitua pela URL da sua imagem
        alt="Background"
      />
      <div className="logo">
        <FaNetflix className="netflix-icon" />
      </div>
    </div>
  );
};

export default ImageWithLogo;
