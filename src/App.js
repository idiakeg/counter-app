import React from "react";
import Button from "./components/Button";
import './App.css'
import { useState } from "react";





function App() {
  // initialize the state and the function to keep track of the change
  let [count, setCount] = useState(0)


  // craete functions fo increase and decrease
  const handleIncrease = () => {
    setCount(count = count + 1)
  }
  const handleDecrease = () => {
    setCount(count = count - 1)
  }
  const handleReset = () => {
    setCount(
      count = 0
    )
  }

  return (
    <div className="App">
      <h1>Count: {count} </h1>
      <Button title={"Increase"} action={handleIncrease} />
      <Button title={"Reset"} action={handleReset} />
      <Button title={"Decrease"} action={handleDecrease} />
    </div>
  );
}

export default App;
