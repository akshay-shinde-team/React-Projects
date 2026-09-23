function Ifanimals(props){
    if (!props.animals){
        return <div><h4>Loading...</h4></div>
    }

    if(props.animals.length == 0){
        return <div>There are no animals in List</div>
    }

    return(
        <ul>
           
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>
            })}
        </ul>
    )
}

export {Ifanimals}