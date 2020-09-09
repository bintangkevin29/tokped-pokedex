import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./bottom-nav.style.scss";

const BottomNav: React.FC = () => {
  return (
    <div className="bottomNav">
      <Container fluid className="bottomNav__inner">
        <Row className="bottomNav__menu">
          <Col xs={6}>
            <span className="bottomNav__menuItems bottomNav__menuItems--selected">Pokèdex</span>
          </Col>
          <Col xs={6}>
            <span className="bottomNav__menuItems">My Pokèmons</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomNav;
