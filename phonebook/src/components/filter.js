import React from "react"

const Filter =({filter, handleFilterChange}) => {
    
    return (
        <div >
            filter test <input value={filter} onChange ={handleFilterChange}></input>
        </div>
    )
}

export default Filter