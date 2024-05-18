import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFruitPage = () => {
  const navigate = useNavigate();
  const [fruitData, setFruitData] = useState({
    name: "",
    color: "",
    taste: "",
    season: "",
    origin: "",
    nutritional_values: {
      calories: "",
      sugar: "",
      fiber: "",
      vitamins: {
        vitaminC: "",
        vitaminA: "",
      },
      minerals: {
        potassium: "",
        iron: "",
      },
    },
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

  const fruitEmojis = [
    "🍎",
    "🍏",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🫐",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");
    if (nameParts.length > 1) {
      setFruitData((prevData) => {
        const nestedData = { ...prevData[nameParts[0]] };
        nestedData[nameParts[1]] = value;
        return {
          ...prevData,
          [nameParts[0]]: nestedData,
        };
      });
    } else {
      setFruitData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert numerical fields to numbers
    const formattedFruitData = {
      ...fruitData,
      average_weight: parseFloat(fruitData.average_weight),
      price_per_kg: parseFloat(fruitData.price_per_kg),
      nutritional_values: {
        ...fruitData.nutritional_values,
        calories: parseFloat(fruitData.nutritional_values.calories),
        sugar: parseFloat(fruitData.nutritional_values.sugar),
        fiber: parseFloat(fruitData.nutritional_values.fiber),
      },
    };

    console.log("Submitting fruit data:", formattedFruitData);

    axios
      .post("http://localhost:5005/fruit", formattedFruitData)
      .then((response) => {
        console.log("Fruit added successfully!", response.data);
        navigate(`/fruit/${response.data._id}`);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error adding fruit:", error.response.data);
          alert(`Error: ${error.response.data}`); // Display error message
        } else {
          console.error("Error adding fruit:", error.message);
          alert(`Error: ${error.message}`); // Display error message
        }
      });
  };

  return (
    <div className="container">
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
          <select
            name="image_url"
            value={fruitData.image_url}
            onChange={handleChange}
          >
            <option value="">Select an emoji</option>
            {fruitEmojis.map((emoji, index) => (
              <option key={index} value={emoji}>
                {emoji}
              </option>
            ))}
          </select>
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
          <label>Calories:</label>
          <input
            type="number"
            name="nutritional_values.calories"
            value={fruitData.nutritional_values.calories}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sugar:</label>
          <input
            type="number"
            name="nutritional_values.sugar"
            value={fruitData.nutritional_values.sugar}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fiber:</label>
          <input
            type="number"
            name="nutritional_values.fiber"
            value={fruitData.nutritional_values.fiber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Vitamin C:</label>
          <input
            type="text"
            name="nutritional_values.vitamins.vitaminC"
            value={fruitData.nutritional_values.vitamins.vitaminC}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Vitamin A:</label>
          <input
            type="text"
            name="nutritional_values.vitamins.vitaminA"
            value={fruitData.nutritional_values.vitamins.vitaminA}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Potassium:</label>
          <input
            type="text"
            name="nutritional_values.minerals.potassium"
            value={fruitData.nutritional_values.minerals.potassium}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Iron:</label>
          <input
            type="text"
            name="nutritional_values.minerals.iron"
            value={fruitData.nutritional_values.minerals.iron}
            onChange={handleChange}
          />
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
};

export default AddFruitPage;
