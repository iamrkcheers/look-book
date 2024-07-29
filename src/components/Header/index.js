import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="company-name">Alpha Fashion</div>
      <button className="home-button" onClick={goToHome}>
        <i className="fas fa-home"></i>
      </button>
    </div>
  );
};

export default Header;
