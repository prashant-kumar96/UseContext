import react from "react"
import NoteContext from "./NoteContext";
import {useState} from "react"


const NoteState = (props) => {
    
    const s = {
        "name":"harry",
        "class": "5b"
     }

    const [state, setState] = useState(s);

    return (
        <NoteContext.Provider value={{state, setState}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;