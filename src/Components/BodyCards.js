import React from "react";
import { Col, Row } from "antd";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../assets/Images/img-1.jpg";
const BodyCards = () => {
  return (
    <>
      <Container className="mt-4">
        <Row className="mt-4">
          {/* Card 1 */}
          <Col span={8}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 2 */}
          <Col span={8}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 3 */}
          <Col span={8}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          {/* Card 4 */}
          <Col span={8}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 5 */}
          <Col span={8}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 6 */}
          <Col span={8}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BodyCards;
