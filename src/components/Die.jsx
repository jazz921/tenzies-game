import React from "react";
import dice1 from '../assets/dice-1.svg'
import dice2 from '../assets/dice-2.svg'
import dice3 from '../assets/dice-3.svg'
import dice4 from '../assets/dice-4.svg'
import dice5 from '../assets/dice-5.svg'
import dice6 from '../assets/dice-6.svg'

const Die = ({ value, setHeld, num }) => {

  return (
    <div
      className={`dieBtn ${value.isHold ? 'hold' : ''}`}
      onClick={() => setHeld(value.id)}
    >
      {
        num === 1 ? (<img src={dice1} alt="" />) : "" 
      }
      {
        num === 2 ? (<img src={dice2} alt="" />) : ""
      }
      {
        num === 3 ? (<img src={dice3} alt="" />) : ""
      }
      {
        num === 4 ? (<img src={dice4} alt="" />) : ""
      }
      {
        num === 5 ? (<img src={dice5} alt="" />) : ""
      }
      {
        num === 6 ? (<img src={dice6} alt="" />) : ""
      }
    </div>
  );
};

export default Die;

// src\assets\dice-1.svg