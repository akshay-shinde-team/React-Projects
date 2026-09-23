// function Animals(props)
// {
//     return(
//         <div>
//         <h2>Animals List</h2>
//     <ul>
// {props.animals.map((animal) => {
//         return <AnimalsLists key={animal} animal={animal}/>
// })}
// </ul>
// </div>
//     );
// }

// function AnimalsLists(props){
//     return <li>{props.animal}</li>

// }

function Animals(props){
    return(<div>
        <ul>
            <h3>Animals List</h3>
            {props.animals.map((animal) => {
                return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
            })}

        </ul>
    </div>)
}

export{Animals}