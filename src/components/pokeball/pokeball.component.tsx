import React from "react";

import pokeball from "../../assets/images/pokeball.svg";

import "./pokeball.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCatch } from "../../redux/catch/catch.selector";
import { beginCatchMode } from "../../redux/catch/catch.actions";

const Pokeball: React.FC = () => {
  const dispatch = useDispatch();

  const catchState = useSelector(selectCatch);

  const initiateCatch = () => {
    dispatch(beginCatchMode());
  };

  return (
    <div
      onClick={initiateCatch}
      className={`pokeball ${catchState.catchReady && "pokeball--hidden"}`}
    >
      <div className="pokeball__imageContainer">
        <img className="pokeball__image" alt="" src={pokeball} />
        <div className={`pokeball__catch ${catchState.catchReady && "pokeball__catch--hidden"}`}>
          <div className="pokeball__catchText">Catch!</div>
        </div>
      </div>
    </div>
  );
};

export default Pokeball;
