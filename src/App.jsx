import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ClickButton } from './assets/components/clickbutton'

function App() {
 
  const handleButtonClick = () =>{
    window.location.href="https://media.tenor.com/lopc2ItmE2MAAAAe/hey-jessie.png";
  }

 return( <ClickButton handleClick={handleButtonClick}/> );
}

export default App
