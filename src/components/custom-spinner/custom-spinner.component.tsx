import React from "react";
import { Spinner } from "react-bootstrap";

import "./custom-spinner.style.scss";

const CustomSpinner: React.FC = () => {
  return (
    <div className="customSpinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default CustomSpinner;
