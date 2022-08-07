import React from "react";
import propTypes from "prop-types";
import "./Card.css";
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};
Card.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.string]).isRequired,
};
export default Card;
