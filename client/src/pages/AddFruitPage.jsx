import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Row, Col, Button, Badge } from "react-bootstrap";

const AddFruitPage = () => {
  const navigate = useNavigate();
  const [fruitData, setFruitData] = useState({
    name: "Apple",
    color: "Red",
    taste: "Sweet",
    season: "Fall",
    origin: "USA",
    nutritional_values: {
      calories: 52,
      sugar: 10.4,
      fiber: 2.4,
      vitamins: {
        vitaminC: 7,
        vitaminK: 2,
        vitaminA: 1,
        vitaminB6: 0.1,
      },
      minerals: {
        potassium: 107,
        calcium: 6,
        iron: 0.12,
        copper: 0.027,
        manganese: 0.035,
        magnesium: 5,
      },
    },
    average_weight: 150,
    price_per_kg: 2.5,
    image_url: "🍎",
    availability: "Year-round",
    family: "Rosaceae",
    varieties: ["Gala", "Fuji", "Honeycrisp"],
    uses: ["eaten raw", "used in desserts", "juiced"],
    description: "Enter fruit description",
    cultivation_tips: "Enter cultivation tips",
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

    setFruitData((prevData) => {
      let updatedData = { ...prevData };

      if (nameParts.length === 2) {
        updatedData[nameParts[0]] = {
          ...prevData[nameParts[0]],
          [nameParts[1]]: value,
        };
      } else if (nameParts.length === 3) {
        updatedData[nameParts[0]] = {
          ...prevData[nameParts[0]],
          [nameParts[1]]: {
            ...prevData[nameParts[0]][nameParts[1]],
            [nameParts[2]]: value,
          },
        };
      } else {
        updatedData[name] = value;
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedFruitData = {
      ...fruitData,
      average_weight: parseFloat(fruitData.average_weight),
      price_per_kg: parseFloat(fruitData.price_per_kg),
      nutritional_values: {
        ...fruitData.nutritional_values,
        calories: parseFloat(fruitData.nutritional_values.calories),
        sugar: parseFloat(fruitData.nutritional_values.sugar),
        fiber: parseFloat(fruitData.nutritional_values.fiber),
        vitamins: {
          vitaminC: parseFloat(fruitData.nutritional_values.vitamins.vitaminC),
          vitaminK: parseFloat(fruitData.nutritional_values.vitamins.vitaminK),
          vitaminA: parseFloat(fruitData.nutritional_values.vitamins.vitaminA),
          vitaminB6: parseFloat(
            fruitData.nutritional_values.vitamins.vitaminB6
          ),
        },
        minerals: {
          potassium: parseFloat(
            fruitData.nutritional_values.minerals.potassium
          ),
          calcium: parseFloat(fruitData.nutritional_values.minerals.calcium),
          iron: parseFloat(fruitData.nutritional_values.minerals.iron),
          copper: parseFloat(fruitData.nutritional_values.minerals.copper),
          manganese: parseFloat(
            fruitData.nutritional_values.minerals.manganese
          ),
          magnesium: parseFloat(
            fruitData.nutritional_values.minerals.magnesium
          ),
        },
      },
    };

    console.log(
      "Submitting fruit data:",
      JSON.stringify(formattedFruitData, null, 2)
    );

    axios
      .post("http://localhost:5005/fruit", formattedFruitData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Fruit added successfully!", response.data);
        navigate(`/fruit/${response.data._id}`);
      })
      .catch((error) => {
        console.error("Error adding fruit:", error.response.data.message);
        alert(`Error: ${error.response.data.message}`);
      });
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Add Fruit</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={fruitData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridColor">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              name="color"
              value={fruitData.color || "Red"}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTaste">
            <Form.Label>Taste</Form.Label>
            <Form.Control
              type="text"
              name="taste"
              value={fruitData.taste || "Sweet"}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSeason">
            <Form.Label>Season</Form.Label>
            <Form.Control
              type="text"
              name="season"
              value={fruitData.season || "Fall"}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridOrigin">
            <Form.Label>Origin</Form.Label>
            <Form.Control
              type="text"
              name="origin"
              value={fruitData.origin || "USA"}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAvailability">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              as="select"
              name="availability"
              value={fruitData.availability || "Year-round"}
              onChange={handleChange}
            >
              <option value="Year-round">Year-round</option>
              <option value="Seasonal">Seasonal</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAverageWeight">
            <Form.Label>Average Weight (grams)</Form.Label>
            <Form.Control
              type="number"
              name="average_weight"
              value={fruitData.average_weight || 150}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPricePerKg">
            <Form.Label>Price per kg ($)</Form.Label>
            <Form.Control
              type="number"
              name="price_per_kg"
              value={fruitData.price_per_kg || 2.5}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridImageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            as="select"
            name="image_url"
            value={fruitData.image_url || "🍎"}
            onChange={handleChange}
          >
            <option value="">Select an emoji</option>
            {fruitEmojis.map((emoji, index) => (
              <option key={index} value={emoji}>
                {emoji}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridFamily">
          <Form.Label>Family</Form.Label>
          <Form.Control
            type="text"
            name="family"
            value={fruitData.family || "Rosaceae"}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridVarieties">
          <Form.Label>Varieties</Form.Label>
          <Form.Control
            type="text"
            name="varieties"
            value={fruitData.varieties.join(", ") || "Gala, Fuji, Honeycrisp"}
            onChange={(e) =>
              setFruitData((prevData) => ({
                ...prevData,
                varieties: e.target.value.split(", "),
              }))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridUses">
          <Form.Label>Uses</Form.Label>
          {usesOptions.map((use, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              id={use}
              name={use}
              label={use}
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
          ))}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCalories">
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.calories"
              value={fruitData.nutritional_values.calories || 52}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSugar">
            <Form.Label>Sugar (g)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.sugar"
              value={fruitData.nutritional_values.sugar || 10.4}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFiber">
            <Form.Label>Fiber (g)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.fiber"
              value={fruitData.nutritional_values.fiber || 2.4}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridVitaminC">
            <Form.Label>Vitamin C (%)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.vitamins.vitaminC"
              value={fruitData.nutritional_values.vitamins.vitaminC || 7}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridVitaminA">
            <Form.Label>Vitamin A (%)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.vitamins.vitaminA"
              value={fruitData.nutritional_values.vitamins.vitaminA || 1}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridVitaminK">
            <Form.Label>Vitamin K (%)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.vitamins.vitaminK"
              value={fruitData.nutritional_values.vitamins.vitaminK || 2}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridVitaminB6">
            <Form.Label>Vitamin B6 (%)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.vitamins.vitaminB6"
              value={fruitData.nutritional_values.vitamins.vitaminB6 || 0.1}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPotassium">
            <Form.Label>Potassium (mg)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.minerals.potassium"
              value={fruitData.nutritional_values.minerals.potassium || 107}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCalcium">
            <Form.Label>Calcium (mg)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.minerals.calcium"
              value={fruitData.nutritional_values.minerals.calcium || 6}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridIron">
            <Form.Label>Iron (mg)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.minerals.iron"
              value={fruitData.nutritional_values.minerals.iron || 0.12}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCopper">
            <Form.Label>Copper (mg)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.minerals.copper"
              value={fruitData.nutritional_values.minerals.copper || 0.027}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridManganese">
            <Form.Label>Manganese (mg)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.minerals.manganese"
              value={fruitData.nutritional_values.minerals.manganese || 0.035}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMagnesium">
            <Form.Label>Magnesium (mg)</Form.Label>
            <Form.Control
              type="number"
              name="nutritional_values.minerals.magnesium"
              value={fruitData.nutritional_values.minerals.magnesium || 5}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={fruitData.description || "Enter fruit description"}
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCultivationTips">
          <Form.Label>Cultivation Tips</Form.Label>
          <Form.Control
            as="textarea"
            name="cultivation_tips"
            value={fruitData.cultivation_tips || "Enter cultivation tips"}
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Fruit
        </Button>
      </Form>
    </Container>
  );
};

export default AddFruitPage;
