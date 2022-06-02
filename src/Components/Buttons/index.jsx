import React from "react";
import '../../styles/Button.css'

function Button(props) {

  const itsOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=')
  }
 
  return (
    <div 
    className={`button-container ${itsOperator(props.children) ? 'operator' : null }`.trimEnd()}
    onClick={ () => props.clicHanler(props.children)  } >
      {props.children}
    </div>
  )
}

export default Button