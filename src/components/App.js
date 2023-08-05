
import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function App() {

  const [inputText, setInputText] = useState("");
  const [answer, setAnswer] = useState("");

  // Handling the numbers and symbols
  const input = () => {
    
    console.log("input");
    

  }

  const clear = () => {
    setInputText("");
    setAnswer("");
  }

  const plusMinus = () => {
    console.log("plusMinus");
  }

  const totalAns = () => {
    console.log("totalAnswer");
  }

  return (
    <div className="App">
      <Display inputText={inputText} setInputText={setInputText} answer={answer}/>
      <Buttons input={input} clear={clear} plusMinus={plusMinus}  totalAns={totalAns}/>
    </div>
  );
}

export default App;
