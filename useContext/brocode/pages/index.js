import React from 'react'
import NoteContext from "./context/notes/NoteContext"
import { useContext } from 'react'
const Hello = () => {
    const state1 = useContext(NoteContext)
    console.log(state1)
  return (
    <div>

    hai i am  {state1.state.name} and i am in {state1.state.class}

    <button onClick={()=>
      state1.setState({
        "name":"Prashant",
        "class":"mca"
      })
    }>hellowordl</button>
    </div>
  )
}

export default Hello