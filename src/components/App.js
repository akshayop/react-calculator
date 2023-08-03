
import Buttons from "./Buttons";
import Display from "./Display";

function App() {

  const input = () => {
    console.log("input");
  }

  const clear = () => {
    console.log("clear");
  }

  const plusMinus = () => {
    console.log("plusMinus");
  }

  const totalAns = () => {
    console.log("totalAnswer");
  }

  return (
    <div className="App">
      <Display/>
      <Buttons input={input} clear={clear} plusMinus={plusMinus}  totalAns={totalAns}/>
    </div>
  );
}

export default App;
