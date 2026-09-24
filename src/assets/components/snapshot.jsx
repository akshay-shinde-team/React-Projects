import { useState } from "react";

function Snapshot(){
    const[sent, setsent] = useState(false);
    const[message, setmessage] = useState("Hi");

    if(sent){

        return <div>
            <h4>Your message is in progress</h4>
        </div>
    }

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            setsent(true);
            setmessage(message)
        }}>
            <textarea
            placeholder="Message"
            value={message}
            onChange={e => setmessage(e.target.message)}
            />
            <button type="submit">Send 

            </button>
        </form>
    )
    
}
function setmessage(message){

}
export {Snapshot}