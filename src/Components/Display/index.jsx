import React from "react";
import '../../styles/Display.css'

//trying with arrow function
const Display = ( { input } ) => {
  return (
  <div className="input">
    {input}
  </div>
  )
}

export default Display