import React from "react";
import { Col, Row } from "antd";
import { Container } from "react-bootstrap";
const BodyCards = () => {
  return (
    <>
      <Container className="text-center mt-4 bg-info">
        <Row>
          <Col span={8}>Hello</Col>
          <Col span={8}>Barad</Col>
          <Col span={8}>TestMe</Col>
        </Row>
      </Container>
    </>
  );
};

export default BodyCards;
