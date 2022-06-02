import './App.css';
import logoEmmmed from './images/emmmed.png'
import Button from './Components/Buttons';
import Display from './Components/Display';
import ClearButton from './Components/ClearButton';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const inputHandler= (value) => {
    setInput(input + value )
  }

  const calculate = () => {
    input ? setInput(evaluate(input)) : alert('introduce a number to evaluate it')
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img
          className='logo-emmmed'
          src={logoEmmmed}
          alt="Logo-Emmmed" />
      </div>
      <div className='calculator-container'>
        <div className='rows '>
          <Display input={input} />
        </div>
        <div className='rows'>
          <Button clicHanler={inputHandler} >7</Button>
          <Button clicHanler={inputHandler} >8</Button>
          <Button clicHanler={inputHandler} >9</Button>
          <Button clicHanler={inputHandler} >+</Button>
        </div>
        <div className='rows'>
          <Button clicHanler={inputHandler} >4</Button>
          <Button clicHanler={inputHandler} >5</Button>
          <Button clicHanler={inputHandler} >6</Button>
          <Button clicHanler={inputHandler} >-</Button>
        </div>
        <div className='rows'>
          <Button clicHanler={inputHandler} >1</Button>
          <Button clicHanler={inputHandler} >2</Button>
          <Button clicHanler={inputHandler} >3</Button>
          <Button clicHanler={inputHandler} >*</Button>
        </div>
        <div className='rows'>
          <Button clicHanler={calculate} >=</Button>
          <Button clicHanler={inputHandler} >0</Button>
          <Button clicHanler={inputHandler} >.</Button>
          <Button clicHanler={inputHandler} >/</Button>
        </div>
        <div className="rows">
          <ClearButton clearHandler={ () => setInput('') }>
            CLEAR
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
