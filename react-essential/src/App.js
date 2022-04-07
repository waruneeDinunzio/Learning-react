import React, { useState} from "react";
import './App.css';
import Login from "./Login";


const dishes = [
  "Pad thai",
  "Pad kapow",
  "Red curry",
  "krapow"
]
const dishObjects = dishes.map((dish,i) =>(
  {id:i, title: dish}
))

// User Login info
const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

function App() {
  
  return (
    <div className="App">
      <Login adjective="amazing" dishes = {dishObjects} />
    </div>
  );
}

export default App;
