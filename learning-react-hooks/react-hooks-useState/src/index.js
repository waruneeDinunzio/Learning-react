import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {FaStar} from 'react-icons/fa';

const createArray = (length) =>[
  ...Array(length)
]

function Star({ selected = false, onSelect}) {
  return(
    <FaStar color={selected ? "red" : "grey"}
      onClick= {onSelect}
    />
  )
}

function StarRating({totalStars = 5}){
  const [selectedStars, setSelectedStars] = useState(0)

  return (
    <>
    {createArray(totalStars).map((n,i)=>(
    <Star key={i} 
          selected={selectedStars > i} 
          onSelect={()=> setSelectedStars(i+1)}
           />
  ))}
  <p>
    {selectedStars} of {totalStars}
  </p>
  </>
  )
}

// Ex# 1 const [,,L] = ["Alex","jeab", "Liam"]
function App() {
  // useState is [undefined,f()]
  // EX#2 const result = useState();
  //EX#2 console.log(result)
  //EX#2 const [status,setStatus] = useState("Not Delivered")

  // EX#3
  // const [checked, setChecked] = useState(false)
  return (

    //EX#2 <div>
    //   <h1>The package is: {status} </h1>
    //   <button onClick={()=>setStatus("Delivered")}>Deliver</button>
    //EX#2 </div>

    //EX# 3
    // <div>
    //   <input type="checkbox" value={checked}
    //     onChange={()=> setChecked((checked)=> !checked)}
    //   />
    //   <p>{checked ? "checked" : "not checked"}</p>
    // </div>

   <StarRating totalStars={10} />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


