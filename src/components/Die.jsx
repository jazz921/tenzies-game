import React from "react";

const Die = ({ value, setHeld }) => {
  return (
    <button 
      className={`dieBtn ${value.isHold ? 'hold' : ''}`}
      onClick={() => setHeld(value.id)}
    >
      {value.value}
    </button>
  );
};

export default Die;
