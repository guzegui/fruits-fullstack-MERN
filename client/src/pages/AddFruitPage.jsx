import React from "react";
import { useState } from "react";
import axios from "axios";

function AddFruitPage() {
  const [fruitData, setFruitData] = useState({
    name: "",
    color: "",
    taste: "",
    season: "",
    origin: "",
    calories: "",
    sugar: "",
    fiber: "",
    vitaminC: "",
    vitaminB6: "",
    potassium: "",
    magnesium: "",
    average_weight: "",
    price_per_kg: "",
    image_url: "",
    availability: "",
    family: "",
    varieties: [],
    uses: [],
    description: "",
    cultivation_tips: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFruitData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5005/fruit", fruitData);
      console.log("Fruit added successfully!");
      // Reset the form after successful submission
      setFruitData({
        name: "",
        color: "",
        taste: "",
        season: "",
        origin: "",
        calories: "",
        sugar: "",
        fiber: "",
        vitaminC: "",
        vitaminB6: "",
        potassium: "",
        magnesium: "",
        average_weight: "",
        price_per_kg: "",
        image_url: "",
        availability: "",
        family: "",
        varieties: [],
        uses: [],
        description: "",
        cultivation_tips: "",
      });
    } catch (error) {
      console.error("Error adding fruit:", error);
    }
  };

  const usesOptions = [
    "eaten raw",
    "used in desserts",
    "juiced",
    "cooked",
    "used in smoothies",
    "used in salads",
    "used in jams",
    "used in cooking",
    "canned",
    "dried as prunes",
    "dried",
  ];

  return (
    <div>
      <h1>Add Fruit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={fruitData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={fruitData.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Taste:</label>
          <input
            type="text"
            name="taste"
            value={fruitData.taste}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Season:</label>
          <input
            type="text"
            name="season"
            value={fruitData.season}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Origin:</label>
          <input
            type="text"
            name="origin"
            value={fruitData.origin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Average Weight:</label>
          <input
            type="number"
            name="average_weight"
            value={fruitData.average_weight}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price per kg:</label>
          <input
            type="number"
            name="price_per_kg"
            value={fruitData.price_per_kg}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image_url"
            value={fruitData.image_url}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Availability:</label>
          <select
            name="availability"
            value={fruitData.availability}
            onChange={handleChange}
          >
            <option value="">Select Availability</option>
            <option value="Year-round">Year-round</option>
            <option value="Seasonal">Seasonal</option>
          </select>
        </div>
        <div>
          <label>Family:</label>
          <input
            type="text"
            name="family"
            value={fruitData.family}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Varieties:</label>
          <input
            type="text"
            name="varieties"
            value={fruitData.varieties.join(", ")}
            onChange={(e) =>
              setFruitData((prevData) => ({
                ...prevData,
                varieties: e.target.value.split(", "),
              }))
            }
          />
        </div>
        <div>
          <label>Uses:</label>
          {usesOptions.map((use, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={use}
                name={use}
                value={use}
                checked={fruitData.uses.includes(use)}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setFruitData((prevData) => {
                    if (checked) {
                      return {
                        ...prevData,
                        uses: [...prevData.uses, value],
                      };
                    } else {
                      return {
                        ...prevData,
                        uses: prevData.uses.filter((item) => item !== value),
                      };
                    }
                  });
                }}
              />
              <label htmlFor={use}>{use}</label>
            </div>
          ))}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={fruitData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cultivation Tips:</label>
          <textarea
            name="cultivation_tips"
            value={fruitData.cultivation_tips}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  );
}

export default AddFruitPage;
