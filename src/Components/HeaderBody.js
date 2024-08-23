import React from "react";
import img from "../assets/Images/img-1.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeaderBody = () => {
  return (
    <div className="header">
      <div className="header_body">
        <Container>
          <Row>
            <Col lg={6} sm={12} md={12}>
              <div className="header_body_text">
                <h2>
                  <p>
                    lorem Text lorem Text lorem Text lorem Text lorem Text lorem
                    Text lorem Text
                  </p>
                  <p>lorem Text lorem Text lorem Text lorem Text lorem</p>
                </h2>
              </div>
            </Col>
            <Col lg={6} sm={12} md={12}>
              <Row className="header_body_img">
                <Col lg={3} sm={12} md={12}>
                  <img
                    src={img}
                    alt="header img"
                    width="300px"
                    height="500px"
                    style={{
                      borderRadius: "35px",
                      margin: "25px",
                      padding: "15px",
                    }}
                  />
                </Col>
                <Col lg={3} sm={12} md={12}>
                  <img
                    src={img}
                    alt="header img"
                    width="300px"
                    height="420px"
                    style={{
                      borderRadius: "35px",
                      margin: "25px",
                      padding: "15px",
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeaderBody;
