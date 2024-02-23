import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your sign-in logic here
    console.log('User signed in:', { email, password });

    // Reset form fields after submission
    setEmail('');
    setPassword('');

    navigate('/dashboard');
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
    </div>
  );
};

export default SignInPage;
