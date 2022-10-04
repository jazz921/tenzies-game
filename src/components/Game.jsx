import React from "react";
import Die from "./Die";

const Game = ({ tenzies, die, generateDice, setHeld }) => {
  return (
    <div className="game">
      <div className="instruction">
        <h3>Tenzies</h3>
        <p>
          Roll until all numbers are the same. Click each die to freeze its
          current value between rolls.
        </p>
      </div>
      <div className="die">
        {die.map((val) => {
          return <Die key={val.id} value={val} setHeld={setHeld} num={val.value} />;
        })}
      </div>

      {
        tenzies === false ? (
          <button className="rerollBtn" onClick={() => generateDice()}>
          Reroll
          </button>
        ) : (
          <button className="rerollBtn" onClick={() => location.reload()}>
            Play Again!
          </button>
        )
      }
    </div>
  );
};

export default Game;
