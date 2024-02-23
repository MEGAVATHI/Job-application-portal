import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [selectedUserRole, setSelectedUserRole] = useState('');
  const navigate = useNavigate();

  const handleUserRoleChange = (event) => {
    setSelectedUserRole(event.target.value);

    // Navigate to the landing page based on the selected role
    const landingPage = event.target.value === 'admin' ? '/dashboard' : '/landing';
    navigate(landingPage);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h2>Welcome to the Website</h2>
        <div>
          <h3>Select an option:</h3>
          <div>
            <label>
              <input
                type="radio"
                name="userType"
                value="user"
                checked={selectedUserRole === 'user'}
                onChange={handleUserRoleChange}
              />
              User
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="userType"
                value="admin"
                checked={selectedUserRole === 'admin'}
                onChange={handleUserRoleChange}
              />
              Admin
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
