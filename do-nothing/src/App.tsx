import {useState} from "react";
import './App.css'

import ChangeDuration from "./components/ChangeDuration.tsx";

const App = () => {
  const [timer, setTimer] = useState<number>(60);

  const handleStart = () => {

  }

  return (
      <>
        <h1> Do Nothing </h1>
        <h2>I want to do nothing for <ChangeDuration onUpdate={setTimer}/> Minutes</h2>

        <br/>

        <h1>{timer}</h1>
        <button onClick={handleStart}> Start</button>
      </>
  )
}
export default App