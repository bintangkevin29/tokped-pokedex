import React from "react";

import pokeball from "../../assets/images/pokeball.svg";

import "./pokeball.style.scss";

const Pokeball: React.FC = () => {
  return (
    <div className="pokeball">
      <div className="pokeball__imageContainer">
        <img className="pokeball__image" alt="" src={pokeball} />
        <div className="pokeball__catch">
          <div className="pokeball__catchText">Catch!</div>
        </div>
      </div>
    </div>
  );
};

export default Pokeball;
