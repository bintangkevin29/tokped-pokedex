import React from "react";

import "./type-card.style.scss";

interface Props {
  type: string;
}

const TypeCard: React.FC<Props> = ({ type }) => {
  return <div className={`typeCard bg-${type}`}>{type}</div>;
};

export default TypeCard;
