import React, { ReactNode } from "react";

import "./fixed-container.style.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

const FixedContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`fixedContainer ${className}`} data-test="fixedContainer">
      <div className="fixedContainer__inner" data-test="fixedContainer__inner">
        {children}
      </div>
    </div>
  );
};

export default FixedContainer;
