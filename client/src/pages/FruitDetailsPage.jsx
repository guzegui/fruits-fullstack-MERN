import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Badge, Container, Row, Col } from "react-bootstrap";

const fruit_url = "http://localhost:5005/fruit";

function FruitDetailsPage() {
  const [fruit, setFruit] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${fruit_url}/${id}`).then((res) => {
      setFruit(res.data);
    });
  }, [id]);

  if (!fruit) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h2>{fruit.name}</h2>
        </Card.Header>
        <Card.Body>
          <Row className="mb-4">
            <Col md={3} className="text-center">
              <span style={{ fontSize: "100px" }}>{fruit.image_url}</span>
            </Col>
            <Col md={9}>
              <Card.Subtitle className="mb-2 text-muted">
                {fruit.family}
              </Card.Subtitle>
              <Card.Text>{fruit.description}</Card.Text>
              <ul className="list-unstyled">
                <li>
                  <strong>Season:</strong> {fruit.season}
                </li>
                <li>
                  <strong>Origin:</strong> {fruit.origin}
                </li>
                <li>
                  <strong>Availability:</strong> {fruit.availability}
                </li>
                <li>
                  <strong>Price per kg:</strong> ${fruit.price_per_kg}
                </li>
                <li>
                  <strong>Average weight:</strong> {fruit.average_weight} grams
                </li>
                <li>
                  <strong>Varieties:</strong> {fruit.varieties.join(", ")}
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <strong>Nutritional Values:</strong>
              <ul className="list-unstyled">
                <li>
                  <strong>Calories:</strong> {fruit.nutritional_values.calories}
                </li>
                <li>
                  <strong>Sugar:</strong> {fruit.nutritional_values.sugar}g
                </li>
                <li>
                  <strong>Fiber:</strong> {fruit.nutritional_values.fiber}g
                </li>
                <li>
                  <strong>Vitamins:</strong>
                  <ul>
                    {Object.entries(fruit.nutritional_values.vitamins).map(
                      ([key, value]) => (
                        <li key={key}>
                          {key}: {value}% Daily Value
                        </li>
                      )
                    )}
                  </ul>
                </li>
                <li>
                  <strong>Minerals:</strong>
                  <ul>
                    {Object.entries(fruit.nutritional_values.minerals).map(
                      ([key, value]) => (
                        <li key={key}>
                          {key}: {value}% Daily Value
                        </li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Uses:</strong>
              <ul className="list-inline">
                {fruit.uses.map((use, index) => (
                  <li key={index} className="list-inline-item">
                    <Badge bg="success" className="p-2">
                      {use}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FruitDetailsPage;
