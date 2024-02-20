import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'E:/advApp/job-app/src/assets/css/reg.css';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your registration logic here
    console.log('User registered:', { username, email, password, age, gender,});

    // Reset form fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
    
    setAge('');
    setGender('');
    

    // Update state to indicate successful registration
    setRegistrationSuccess(true);
    navigate('/landing');
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
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
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
            Age:
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <br />
          <label>
            Gender:
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
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
