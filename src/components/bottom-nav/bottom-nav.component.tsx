import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

import { selectModules } from "../../redux/modules/modules.selector";

import "./bottom-nav.style.scss";

const BottomNav: React.FC = () => {
  const modules = useSelector(selectModules);

  const location = useLocation();

  return (
    <div className="bottomNav">
      <Container fluid className="bottomNav__inner">
        <Row className="bottomNav__menu">
          {modules.map((module, i) => (
            <Col xs={6} key={i}>
              <Link
                to={module.url}
                className={`bottomNav__menuItems ${
                  location.pathname === module.url ? "bottomNav__menuItems--selected" : ""
                }`}
              >
                {module.name}
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BottomNav;
