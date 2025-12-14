import { useState } from 'react'
import './App.css'
import Display from './display.jsx'
import Buttons from './buttons.jsx'

function App() {
  let [val,setVal] = useState("");

  const button_click = (btn) => {
    if(btn === "C") {
      setVal("");
    }
    else if(btn === "=") {
      setVal(eval(val));
    }
    else {
      setVal(val + btn)
    }
  }

  return (
    <>
      <div className="calculator">
        <Display value={val}/>
        <Buttons on_click_button = {button_click}/>
      </div>
    </>
  );
}

export default App
