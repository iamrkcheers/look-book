import React, { useEffect, useState } from "react";
import axios from "axios";
import Look from "../Look";
import useSwipe from "../../hooks/useSwipe";
import "./styles.css";

const LookBook = () => {
  const [looks, setLooks] = useState([]);
  const [currentLookIndex, setCurrentLookIndex] = useState(0);

  useEffect(() => {
    const fetchLooks = async () => {
      try {
        const response = await axios.get("/db/looks.json");
        setLooks(response?.data);
      } catch (error) {
        console.error("Error fetching looks :", error);
      }
    };

    fetchLooks();
  }, []);

  const handleNextLook = () => {
    setCurrentLookIndex((prevIndex) => (prevIndex + 1) % looks?.length);
  };

  const handlePrevLook = () => {
    setCurrentLookIndex(
      (prevIndex) => (prevIndex - 1 + looks?.length) % looks?.length
    );
  };

  if (looks?.length === 0) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="look-book">
      <Look
        look={looks[currentLookIndex]}
        handleNextLook={handleNextLook}
        handlePrevLook={handlePrevLook}
      />
    </div>
  );
};

export default LookBook;
