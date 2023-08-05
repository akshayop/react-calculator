
import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import { evaluate, round } from "mathjs";

function App() {

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  // Handling the numbers and symbols
  const inputHandler = (e) => {
    
    
    if(answer === "Invalid Input!!") {
      return;
    }
    
    let val = e.target.innerText;
    let str = input + val;

    if(str.length > 14) {
      return;
    }

    if(answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else {
      setInput(str);
    }


  }

  const clear = () => {
    setInput("");
    setAnswer("");
  }

  const plusMinus = () => {
    console.log("plusMinus");
  }

  const totalAns = () => {
    if(input === "") {
      return;
    }

    let result = 0;
    let finalAns = input;

    result = evaluate(finalAns);
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  }

  return (
    <div className="App">
      <Display input={input} setInput={setInput} answer={answer}/>
      <Buttons inputHandler={inputHandler} clear={clear} plusMinus={plusMinus}  totalAns={totalAns}/>
    </div>
  );
}

export default App;
