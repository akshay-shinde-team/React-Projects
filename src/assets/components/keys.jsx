const todos = [
    {
        task: "I am good", id: crypto.randomUUID()
    },
    {
        task:"Sam is bad", id:crypto.randomUUID()
    },
    {
        task:"All good", id: crypto.randomUUID()
    }
];

function Keys(){
    return(
        <ul>
            {todos.map((todo) => {
              return  <li key={todo.id}>{todo.task}</li>
            })}
        </ul>
    );
}

export {Keys}