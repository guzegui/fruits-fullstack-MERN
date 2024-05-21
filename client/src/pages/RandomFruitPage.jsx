import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  return <div>Loading a random fruit...</div>;
}

export default RandomFruitPage;
