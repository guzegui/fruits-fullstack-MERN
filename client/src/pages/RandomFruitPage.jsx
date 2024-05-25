import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FruitDetailsPlaceholder from "../components/FruitDetailsPlaceholder";
import "../index.css";


function RandomFruitPage({ randomFruit }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (randomFruit) {
      const fruitId = randomFruit();
      if (fruitId) {
        navigate(`/fruit/${fruitId}`);
      }
    }
  }, [randomFruit, navigate]);

  return <FruitDetailsPlaceholder />;
}

export default RandomFruitPage;
