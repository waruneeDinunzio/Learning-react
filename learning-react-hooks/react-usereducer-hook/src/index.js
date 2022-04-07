/* eslint-disable default-case */
import React, { useReducer }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
 //### first example how to use useReducer refactoring useState = 
 // easier to understand it
// function App() {
//   const [checked, toggle] = useReducer(
//     (checked) => !checked, 
//     false
//   )

//   return(
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={toggle}
//         />
//         {checked ? "checked": "Not checked"}
//     </>
//   )
// }
const initialState = {
  message: "hi"
}

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I just said ${state.message}`
      }

    case "whisper": 
      return {
        message: `excuse me, I just said ${state.message}`
      }
  }
}

function App(){
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )
  return (
    <>
      <p>Messange: {state.message}</p>
      <button onClick={()=> dispatch({type: "yell"})}>YELL</button>
      <button onClick={()=> dispatch({type: "whisper"})}>whisper</button>
    </>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


