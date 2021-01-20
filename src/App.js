import React, {useReducer, useState} from 'react';
import './App.css';

function reducer(state, action){
  switch (action.type) {
    case "minus":
      return {number: state.number-1}
    case "plus":
      return {number: state.number+1}
  }
}

function App() {
  // useReducer Method
  const [state, dispatch] = useReducer(reducer, {number:0})
  function minus2(){
    dispatch({type: "minus"})
  }
  function plus2(){
    dispatch({type: "plus"})
  }
  // useState Method
  const [number, setNumber] = useState(0);
  function minus(){
    setNumber(number-1)
  }
  function plus(){
    setNumber(number+1)
  }
  return (
    <div className="App">
      {/* useState Method */}
      <button onClick={minus}>-</button>
        <p>{number}</p>
      <button onClick={plus}>+</button>
      {/* useReducer Method */}
      <button onClick={minus2}>-</button>
        <p>{state.number}</p>
      <button onClick={plus2}>+</button>
    </div>
  );
}

export default App;
