function Animalslist(){

    const animals = ['Lion', 'Giraffe' ,'Zebra','Tiger','Rabbit'];

    return(

        <div>
            <h1>Animals List</h1>
            <ul>
                {animals.map((animal) => {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        </div>
    );


}


// function Animals(){

// }
export {Animalslist};