
import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import { evaluate, round } from "mathjs";
import styles from "../styles/app.module.css"
import { toast } from "react-toastify";

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
    if (answer === "Invalid Input!!") return;
    else if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }
      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }

  }

  const totalAns = () => {
    if(input === "") {
      return;
    }

    let result = 0;
    let finalAns = input;

    try {
      result = evaluate(finalAns);
    } catch(error) {
      toast.error("Invalid Input!......")
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  }

  return (
    <div className={styles.app}>
      <Display input={input} setInput={setInput} answer={answer}/>
      <Buttons inputHandler={inputHandler} clear={clear} plusMinus={plusMinus}  totalAns={totalAns}/>
    </div>
  );
}

export default App;
