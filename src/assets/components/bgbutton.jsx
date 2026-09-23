import { useState } from "react";


const COLORS = ['pink','yellow','orange','purple','grey'];


function Bgbutton(){
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const [count, setCount] = useState(0);
   const onButtonClick = (color) =>{
    setBackgroundColor(color);
    setCount(count + 1)
   }

   return(
    <div
    style={{backgroundColor}}
    >

        <h4>
        {count}
        </h4>
        {COLORS.map((color) =>(
            <button
            type="button"
            key={color}
            onClick={() => onButtonClick(color)}
            className={backgroundColor === color ? 'selected': ''}

            
            >{color}</button>
        ))}


    </div>
   )
}

export {Bgbutton}