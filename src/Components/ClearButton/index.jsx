import React from "react";
import '../../styles/ClearButton.css'

const ClearButton = ( { children, clearHandler } ) => {
  return (
  <button 
  className="clear-button"
  onClick={clearHandler}
  >
    {children}
  </button>
  )
}

export default ClearButton