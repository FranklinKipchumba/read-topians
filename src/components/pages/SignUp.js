// import React from 'react';
import '../../App.css';

// export default function SignUp() {
//   return <h1 className='sign-up'></h1>;
// }
import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email', email);
    console.log('password', password);
    console.log('passwordConfirmation', passwordConfirmation);
  };

  return (
   
    <form onSubmit={handleSubmit} className = "justify-content-center my-auto" >
       < div className='mx-auto my-auto' style={{width: '10%'}}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
      </div>
    </form>
  
  );
}

export default Signup;
