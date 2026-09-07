import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import UserList from "./components/UserList";
import ControlledLoginForm from "./components/login/ControlledLoginForm";

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  return (
    <>
    <ControlledLoginForm setValue={setValue} />
    <p>Controlled Form email value is - {value} </p>
    -----------------------------------------------------------------------------------
     <UserList />
     <br/>
    -----------------------------------------------------------------------------------
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>


      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
