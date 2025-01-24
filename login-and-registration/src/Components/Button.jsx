import React from "react";

const Button = ({ onClick, label, className }) => {
  return (
    <button className={`ghost ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
