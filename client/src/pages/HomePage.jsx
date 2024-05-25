import { useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../index.css";
import { ThemeContext } from "../context/theme.context";

function HomePage() {
  const value = useContext(ThemeContext); 

  return (
    <div className={`container mt-5 ${value === "dark" ? "dark-theme" : ""}`}>
      <CardGroup>
        <LinkContainer to="/fruit">
          <Card className="clickable-card">
            <Card.Img variant="top" src="/images/all-fruit.jpg" alt="All Fruit" />
            <Card.Body>
              <Card.Title>All Fruit</Card.Title>
              <Card.Text>
                Browse through all the available fruit
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Go to All Fruit</small>
            </Card.Footer>
          </Card>
        </LinkContainer>
        <LinkContainer to="/random-fruit">
          <Card className="clickable-card">
            <Card.Img variant="top" src="/images/random-fruit.jpg" alt="Random Fruit" />
            <Card.Body>
              <Card.Title>Random Fruit</Card.Title>
              <Card.Text>
                Get a random fruit&apos;s details from the collection
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Go to Random Fruit</small>
            </Card.Footer>
          </Card>
        </LinkContainer>
        <LinkContainer to="/new-fruit">
          <Card className="clickable-card">
            <Card.Img variant="top" src="/images/add-fruit.jpg" alt="New Fruit" />
            <Card.Body>
              <Card.Title>New Fruit</Card.Title>
              <Card.Text>
                Add a new element to the database
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Go to New Fruit</small>
            </Card.Footer>
          </Card>
        </LinkContainer>
      </CardGroup>
    </div>
  );
}

export default HomePage;
