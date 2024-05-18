import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Badge } from "react-bootstrap";

const fruit_url = "http://localhost:5005/fruit";

function FruitDetailsPage() {
  const [fruit, setFruit] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${fruit_url}/${id}`).then((res) => {
      setFruit(res.data);
    });
  }, []);

  console.log(fruit);

  return (
    <Card className="my-3">
      {fruit && (
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title>{fruit.name}</Card.Title>
            <Badge bg="primary">{fruit.color}</Badge>
          </div>
          <Card.Subtitle className="mb-2 text-muted">
            {fruit.family}
          </Card.Subtitle>
          <Card.Text>{fruit.description}</Card.Text>
          <ul className="list-unstyled">
            <li>Season: {fruit.season}</li>
            <li>Origin: {fruit.origin}</li>
            <li>Availability: {fruit.availability}</li>
            <li>Price per kg: ${fruit.price_per_kg}</li>
            <li>Average weight: {fruit.average_weight} grams</li>
            <li>Varieties: {fruit.varieties.join(", ")}</li>
          </ul>
          <div>
            <strong>Nutritional Values:</strong>
            <ul>
              <li>Calories: {fruit.nutritional_values.calories}</li>
              <li>Sugar: {fruit.nutritional_values.sugar}g</li>
              <li>Fiber: {fruit.nutritional_values.fiber}g</li>
              <li>
                Vitamins:
                <ul>
                  {Object.entries(fruit.nutritional_values.vitamins).map(
                    ([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li>
                Minerals:
                <ul>
                  {Object.entries(fruit.nutritional_values.minerals).map(
                    ([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <strong>Uses:</strong>
            <ul className="list-inline">
              {fruit.uses.map((use, index) => (
                <li key={index} className="list-inline-item">
                  <Badge bg="success">{use}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </Card.Body>
      )}
    </Card>
  );
}

export default FruitDetailsPage;
