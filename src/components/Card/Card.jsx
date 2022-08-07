import React from "react";
import propTypes from "prop-types";
import "./Card.css";
const Card = ({ children }) => {
  return (
    <div
      className="card"
      draggable={true}
      onDragOver={(e) => {
      }}
      onDragLeave={(e) => {}}
      onDragStart={(e) => {}}
      onDragEnd={(e) => {}}
      onDrop={(e) => {}}
    >
      {children}
    </div>
  );
};
Card.propTypes = {
  children: propTypes.string.isRequired,
};
export default Card;
