import React from "react";
import { Container, Card, Row, Col, Badge, Placeholder } from "react-bootstrap";
import "../index.css";

function FruitPlaceholder() {
  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Placeholder as="h2" animation="wave" className="custom-placeholder">
            <Placeholder xs={6} />
          </Placeholder>
        </Card.Header>
        <Card.Body>
          <Row className="mb-4">
            <Col md={3} className="text-center">
              <Placeholder
                style={{ fontSize: "100px" }}
                as="span"
                animation="wave"
                className="custom-placeholder"
              >
                <Placeholder xs={12} />
              </Placeholder>
            </Col>
            <Col md={9}>
              <Card.Subtitle className="mb-2 text-muted">
                <Placeholder
                  as="span"
                  animation="wave"
                  className="custom-placeholder"
                >
                  <Placeholder xs={4} />
                </Placeholder>
              </Card.Subtitle>
              <Card.Text>
                <Placeholder
                  as="p"
                  animation="wave"
                  className="custom-placeholder"
                >
                  <Placeholder xs={12} />
                </Placeholder>
              </Card.Text>
              <ul className="list-unstyled">
                <li>
                  <strong>Season:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={2} />
                  </Placeholder>
                </li>
                <li>
                  <strong>Origin:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={2} />
                  </Placeholder>
                </li>
                <li>
                  <strong>Availability:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={2} />
                  </Placeholder>
                </li>
                <li>
                  <strong>Price per kg:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={2} />
                  </Placeholder>
                </li>
                <li>
                  <strong>Average weight:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={2} />
                  </Placeholder>
                </li>
                <li>
                  <strong>Varieties:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={4} />
                  </Placeholder>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <strong>Nutritional Values:</strong>
              <ul className="list-unstyled">
                <li>
                  <strong>Calories:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={2} />
                  </Placeholder>
                </li>
                <li>
                  <strong>Sugar:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={2} />
                  </Placeholder>
                </li>
                <li>
                  <strong>Fiber:</strong>{" "}
                  <Placeholder
                    as="span"
                    animation="wave"
                    className="custom-placeholder"
                  >
                    <Placeholder xs={2} />
                  </Placeholder>
                </li>
                <li>
                  <strong>Vitamins:</strong>
                  <ul>
                    <li>
                      <Placeholder
                        as="span"
                        animation="wave"
                        className="custom-placeholder"
                      >
                        <Placeholder xs={2} />
                      </Placeholder>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Minerals:</strong>
                  <ul>
                    <li>
                      <Placeholder
                        as="span"
                        animation="wave"
                        className="custom-placeholder"
                      >
                        <Placeholder xs={2} />
                      </Placeholder>
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Uses:</strong>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Badge bg="success" className="p-2">
                    <Placeholder
                      as="span"
                      animation="wave"
                      className="custom-placeholder"
                    >
                      <Placeholder xs={2} />
                    </Placeholder>
                  </Badge>
                </li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FruitPlaceholder;
