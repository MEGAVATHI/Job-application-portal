import { useState } from 'react';

import UserDetails from '../components/userdetails';
import AdminDrawer from './admindrawer';
import 'E:/advApp/job-app/src/assets/css/dashboard.css';
import AddJobPage from '../components/addjobs';
import UpdateStatusPage from '../components/update';


const AdminDashboardPage = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleDrawerItemClick = (component) => {
        setActiveComponent(component);
      };
      const renderActiveComponent = () => {
        console.log('Active Component:', activeComponent);
        switch (activeComponent) {
          case 'UserDetails':
            return <UserDetails />;
          case 'AddJobs':
            return <AddJobPage/>;
          case 'Updatestatus':
            return <UpdateStatusPage/>;
          // Add more cases for other components
          default:
            return (
              <div className="welcome-message">
                <h1>Welcome to ADMIN Dashboard</h1>
                <p>Explore and manage your dashboard features here.</p>
              </div>
            );
        }
      };
    
  return (
    
    <div>
    {/* Navbar with TemporaryDrawer */}
    <header className="navbar">
      <div className="nav-content">
      <AdminDrawer onItemClick={handleDrawerItemClick} />
      <h2 className="nav-title">Admin Dashboard</h2>
    </div>
  </header>
        <main className="main-content">
        
        {renderActiveComponent()}
    </main>
  
        <footer>
          {/* Your footer content goes here */}
          <p>&copy; 2022 Your Company</p>
        </footer>
      </div>
    );
  };
export default AdminDashboardPage;
