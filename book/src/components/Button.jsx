import React, { useState } from "react";

const Button = ({ type, onClick, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    button: {
      background: "linear-gradient(45deg, #be5b3c, #7f3534)", 
      color: "white",
      fontWeight: "bold",
      padding: "12px 24px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: isHovered ? "0px 4px 8px rgba(0, 0, 0, 0.3)" : "0px 2px 4px rgba(0, 0, 0, 0.2)",
      transform: isHovered ? "scale(1.05)" : "scale(1)",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;