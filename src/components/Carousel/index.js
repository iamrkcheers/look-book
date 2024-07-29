import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Carousel = ({ cards, activeIndex }) => {
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="carousel">
      {cards?.map((card, index) => (
        <div
          key={card?.productId}
          className={`carousel-card ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleCardClick(card?.productId)}
        >
          <img src={card?.image} alt={card?.text} />
          <div className="card-text">{card?.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
