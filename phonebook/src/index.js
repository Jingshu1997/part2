import ReactDOM from 'react-dom/client'
import App from './App'
import React from "react"

const notes = [
 
]
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App notes={notes} />)
