
import TemporaryDrawer from "./drawer";
import 'E:/advApp/job-app/src/assets/css/dashboard.css';
const DashboardPage = () => {
  return (
    
      <div className="user-details-container">
      {/* Navbar with TemporaryDrawer */}
      <header className="navbar">
        <div className="nav-content">
          <TemporaryDrawer />
          <h2 className="nav-title">My Dashboard</h2>
        </div>
      </header>
        <main className="main-content">
        {/* Your dashboard content goes here */}
        {/* Add other components or content specific to your dashboard */}
        <div className="welcome-message">
        <h1>Welcome to Your Dashboard</h1>
        <p>Explore and manage your dashboard features here.</p>
      </div>
      
      {/* Add other components or content specific to your dashboard */}
    </main>
  
        <footer>
          {/* Your footer content goes here */}
          <p>&copy; 2022 Your Company</p>
        </footer>
      </div>
    );
  };
export default DashboardPage;
