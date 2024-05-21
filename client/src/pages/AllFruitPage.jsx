import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Badge,
} from "react-bootstrap";

function AllFruitPage({ fruitFromAPI, fruit, setFruit }) {
  const [searchFruit, setSearchFruit] = useState("");

  useEffect(() => {
    if (fruitFromAPI.length > 0) {
      filterFruit();
    }
  }, [searchFruit, fruitFromAPI]);

  const filterFruit = () => {
    const filteredFruit = fruitFromAPI.filter((fruit) => {
      return fruit.name.toLowerCase().includes(searchFruit.toLowerCase());
    });
    setFruit(filteredFruit);
  };

  const handleChange = (e) => {
    setSearchFruit(e.target.value.toLowerCase());
  };

  if (!fruitFromAPI || !fruit) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="mb-3">
          <InputGroup>
            <InputGroup.Text>Search Fruit</InputGroup.Text>
            <Form.Control
              onChange={handleChange}
              value={searchFruit}
              placeholder="Search Fruit"
            />
          </InputGroup>
        </Col>
      </Row>
      <ListGroup>
        {fruit.map((fruit) => (
          <ListGroup.Item key={fruit._id} className="mb-3">
            <Link
              to={`/fruit/${fruit._id}`}
              className="text-dark text-decoration-none"
            >
              <Row>
                <Col md={2}>
                  <span style={{ fontSize: "50px" }}>{fruit.image_url}</span>
                </Col>
                <Col md={10}>
                  <h3>{fruit.name}</h3>
                  <p className="text-muted">{fruit.description}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  {fruit.uses.map((use, index) => (
                    <Badge key={index} bg="primary" className="me-2 mb-2">
                      {use}
                    </Badge>
                  ))}
                </Col>
              </Row>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default AllFruitPage;
