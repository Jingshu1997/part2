import React from "react"

const Filter =({filter, handleNoteChange}) => {
    
    return (
        <div >
            filter test <input value={filter} onChange ={handleNoteChange}></input>
        </div>
    )
}

export default Filter