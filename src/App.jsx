import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Confetti from "react-confetti";

function App() {

  const generateNewDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return {
      id: Math.random() * 100,
      value: randomNumber,
      isHold: false,
    };
  };

  const generateDice = () => {
    let dieNums = [];
    for (let i = 1; i <= 10; i++) {
      dieNums.push(generateNewDice());
    }
    return dieNums;
  };
  // ------------- STATE --------------------- //
  const [die, setDie] = useState(() => generateDice());
  const [tenzies, setTenzies] = useState(false)

  // ------------------ EFFECT ---------------- //
  useEffect(() => {
    const firstVal = die[0].value
    const isAllHold = die.every(die => die.isHold === true)
    const isAllSameValue = die.every(die => die.value === firstVal)
    if (isAllHold && isAllSameValue) {
      setTenzies(true)
    } else if (isAllHold && !isAllSameValue) {
      location.reload()
    } else {
      return
    }
  }, [die])

  const setHeld = (id) => {
    setDie((prevDices) =>
      prevDices.map((dice) => {
        if (dice.id === id) {
          return {
            ...dice,
            isHold: !dice.isHold,
          };
        }
        return dice;
      })
    );
  };

  const rollDice = () => {
    setDie((oldDie) =>
      oldDie.map((die) => {
        return die.isHold ? die : generateNewDice();
      })
    );
  };

  return (
    <div>

      {
        tenzies ? <Confetti /> : ''
      }
      <Header />
      <div className="game-container">
        <Game
          generateDice={rollDice}
          die={die}
          setDie={setDie}
          setHeld={setHeld}
          tenzies={tenzies}
        />
      </div>
    </div>
  );
}

export default App;
