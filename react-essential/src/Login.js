import { useRef, useState, useEffect } from 'react';

function Login(props) {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  }

    useEffect(()=> {
        userRef.current.focus();
    },[])

    useEffect(()=> {
        setErrMsg('')
    },[user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd)
        setUser('')
        setPwd('')
        setSuccess(true)
    }

    return(
        <>
            { success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br/>
                    <p><a href="#">Go to Home</a></p>
                </section>
            ) : (
        
      <div className="form">
      <h1>Sign In</h1>
       <form onSubmit={handleSubmit}>
         <div className="input-container">
           <label htmlFor= "email">Email </label>
           <input 
                type="text" 
                id="email"
                ref={userRef}
                // autoComplete="off"
                onChange={(e)=> setUser(e.target.value)}
                value={user}
                required 
            />
            
         </div>
         <div className="input-container">
            <label htmlFor= "email">Password </label>
             <input 
                type="text" 
                id="password"
                onChange={(e)=> setPwd(e.target.value)}
                value={pwd}
                required 
            />
         </div>
         <div className="button-container">
           <input type="submit" />
         </div>
       </form>
     </div>
             )}
     </>
    )
  }

export default Login