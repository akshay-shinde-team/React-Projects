import { useState } from "react";

function States(){
    const [person, setPerson] = useState({name:'Akshay Shinde', age:28});

    const handleIncreaseAge = () =>{
        const newPerson = {...person, age: person.age + 1}
        setPerson(newPerson)
    }

    return(<div>
        <h3>{person.name}</h3>
        <h4>{person.age}</h4>
        <button onClick={handleIncreaseAge}>Increase Age</button>
    </div>)
}

export {States}