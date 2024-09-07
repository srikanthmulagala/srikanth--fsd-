
import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log('Email:', email, 'Password:', password ,'Username:',name);
  };

  return (
    <div className='a'>
    <form onSubmit={handleSubmit}>
    <div>
        <label For="username" value={name}>Username:</label>
        <input
          type="Name"
          id="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label For="email" value={email}>Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label For="password"   value={password}>Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Signup;