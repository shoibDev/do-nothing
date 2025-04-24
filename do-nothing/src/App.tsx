import {useState} from "react";
import './App.css'

import ChangeDuration from "./components/ChangeDuration.tsx";
import Model from "./components/Model.tsx";

const App = () => {
  const [timer, setTimer] = useState<number>(60);

  const handleStart = () => {

  }

  return (
      <>
        <h1> Do Nothing </h1>
        <h2>I want to do nothing for <ChangeDuration onUpdate={setTimer}/> Minutes</h2>

        <button onClick={handleStart}> Start</button>
      </>
  )
}
export default App