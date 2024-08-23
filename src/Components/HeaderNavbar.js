import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeaderNavbar = () => {
  return (
    <>
      <nav className="header_navbar">
        <Container>
          <Row>
            <Col lg={4} sm={12} md={12}>
              <div className="nav_logo">
                <h1>Barad</h1>
              </div>
            </Col>
            <Col lg={4} sm={12} md={12}>
              <div className="nav_items">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Contact">Contact</a>
                <a href="#Review">Review</a>
              </div>
            </Col>
            <Col lg={4} sm={12} md={12} className="p-0">
              <div className="nav_auth">
                <button>Sign In</button>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </>
  );
};

export default HeaderNavbar;
