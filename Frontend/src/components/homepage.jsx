import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="homepage-container">
  <div className="homepage-content">
      <h2>Welcome to the Website</h2>
      <div>
        <h3>Select an option:</h3>
        <div>
          <label>
            <input type="radio" name="userType" value="user" />
            User
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="userType" value="admin" />
            Admin
          </label>
        </div>
      </div>

      <div className="button-container" >
        <h3>Choose an action:</h3>
        <Link to="/registration">
          <button>Register</button>
        </Link>
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
