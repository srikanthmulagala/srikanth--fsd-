
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className='a'>
    <form onSubmit={handleSubmit}>
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

export default LoginForm;