import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    // Your sign-in logic here
    console.log('User signed in:', { email, password, selectedRole });

    // Reset form fields and error message after successful submission
    setEmail('');
    setPassword('');
    setError('');

    // Determine the destination based on the user's role
    const destination = selectedRole === 'admin' ? '/admindash' : '/dashboard';

    navigate(destination);
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
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
          <label>
            Role:
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="role-dropdown"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
