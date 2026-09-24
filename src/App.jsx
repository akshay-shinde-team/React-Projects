import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Keys } from './assets/components/keys'
import { Bgbutton } from './assets/components/bgbutton'
import { States } from './assets/components/states'
import { Controlled } from './assets/components/controlled'
import { Snapshot } from './assets/components/snapshot'

function App() {
 
//   const handleButtonClick = () =>{
//     window.location.href="https://media.tenor.com/lopc2ItmE2MAAAAe/hey-jessie.png";
//   }

//  return( <ClickButton handleClick={handleButtonClick}/> );

// const animals = ['Raccoon','Lion', 'Giraffe' ,'Zebra','Tiger','Rabbit'];

return(


  <div>
    <h3>AKs</h3>
   <Snapshot/>
    </div>
);
}

export default App
