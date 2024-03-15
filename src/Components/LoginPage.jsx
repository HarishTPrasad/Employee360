
import React, { useState } from 'react';
import myImage from './Assets/logo.png';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    console.log('Logging in with:', { username, password });
    // Reset the form after login
    setUsername('');
    setPassword('');
  };

  return (
    

   <>
<div className='deg'>
  

  
<div className='bg1'>
<div>
  
<img src={myImage} alt="My Image" />

</div>

<div className='con'>
<h1>Contact us</h1>
<p>9315790780
</p>
<p>
+9354275246
</p>
<p>
info@emp360.it.co.in
</p>

</div>

</div>



<div className='bg'>
    <div className="login-container">
   <h2>WELCOME</h2>
   <h2>BACK SIR !</h2>
   
   <form onSubmit={handleLogin} className="login-form">
   <p> I was waiting for you, Please varify yourself... </p>
     <div className="form-group">
       <label htmlFor="username"></label>
       <input
         type="text"
         id="username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         placeholder="Your username"
         className="form-control"
       />
     </div>
     <div className="form-group">
       <label htmlFor="password"></label>
       <input
         type="password"
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Your password"
         className="form-control"
       />
     </div>

     {/* <div>
      Forgot Password ?
     </div> */}


     <Link to="dash">
     <button type="submit"  className="btn btn-primary">Login</button>
     </Link>
    
   </form>
 </div>
 </div>




</div>
   
   
   
   
   
   
   
   
   </>
   
  );
};

export default LoginPage;

