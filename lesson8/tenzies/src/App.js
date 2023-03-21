import React from "react"
import logo from './logo.svg';
import './App.css';
import Die from './components/Die';


function App() {
  const[dice,setDice] = React.useState(allDiceNumbers())

  const diceElements = dice.map((die) => {
  return <Die dieObj={die} />;
  });

  //
  function allDiceNumbers(){
    // 10 adet random 1-6 arasinda üretilmis sayi arrayini return edecek.
    const newDice = [];
 
    for (let i = 0; i < 10; i++) {
      const newObjDice = {
        value: Math.floor(Math.random() * 6) + 1,
        isSelected: false
      };
      newDice.push(newObjDice)
    }
    return newDice;
  }


  return (
      <main>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">
            {diceElements}
          </div>
          
      </main>
  );
}

export default App;
