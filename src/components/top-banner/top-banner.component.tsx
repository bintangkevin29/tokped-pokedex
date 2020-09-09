import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import { useSelector } from "react-redux";

import { selectModules } from "../../redux/modules/modules.selector";

import "./top-banner.style.scss";

const TopBanner: React.FC = () => {
  const location = useLocation();

  const modules = useSelector(selectModules);
  const currentModule = modules.find((module) => module.url === location.pathname);

  return (
    <div className="topBanner">
      <img
        className="topBanner__backgroundImage"
        alt=""
        src={require("../../assets/images/pokemon.svg")}
      />
      <Container>
        <span className="topBanner__title">{currentModule?.name}</span>
      </Container>
    </div>
  );
};

export default TopBanner;
