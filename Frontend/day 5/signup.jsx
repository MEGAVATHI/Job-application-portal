import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'E:/advApp/job-app/src/assets/css/reg.css';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedRole, setSelectedRole] = useState('user'); // Default role is set to 'user'
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!email || !password || !username || !age || !gender) {
      alert('Please fill in all required fields.');
      return;
    }

    // Your registration logic here
    console.log('User registered:', { username, email, password, age, gender, selectedRole });

    // Reset form fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
    setAge('');
    setGender('');

    // Update state to indicate successful registration
    setRegistrationSuccess(true);

    // Determine the destination based on the user's role
    const destination = selectedRole === 'admin' ? '/admindash' : '/dashboard';

    // Navigate to the appropriate page
    navigate(destination);
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        {registrationSuccess ? (
          <div className="success-message">
            Registration successful! Redirecting to the landing page...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Age:
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Gender:
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
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

            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;
