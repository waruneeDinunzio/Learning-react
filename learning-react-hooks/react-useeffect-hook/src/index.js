import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

function App(){
 //## const [name, setName] = useState("Jan")
 // const [admin, setAdmin] = useState(false)
// # In use case of dealing with specific state using side effect
//   useEffect(() => {
//     //document.title = `Celebrate ${name}`
//     // second argument is called dependency array and make useEffect on fired when only state(this.name) change
//     console.log("Celebrate "+ name)
//   },[name])

//   useEffect(()=>{
//     console.log(`The user is: ${admin? "admin": "not admin"}`)
//   },[admin])

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(res => setData(res))
  },[])

  if(data) {
    return (
      <ul>
        {data.map((user)=>(
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    )
  }
  return (
    //## In use case of dealing with specific state using side effect
    // <section>
    //   <p>
    //     Congratulations {name}!
    //   </p>
    //   <button onClick={()=> setName("Jeab")}>
    //     Change Winner
    //   </button>
    //   <p>{admin? "logged in" : "Not logged in"}</p>
    //   <button
    //   onClick={()=> setAdmin(true)}
    //   >Log In</button>
    // </section>
    <p>
      No Users
    </p>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


