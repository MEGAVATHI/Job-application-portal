import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import RegistrationPage from './components/signup';
import SignInPage from './components/signin';
import LandingPage from './pages/landing';
import DashboardPage from './pages/dashboard';
import JobPage from './components/joblist';
import AdminDashboardPage from './pages/admindash';
import UserDetails from './components/userdetails';
import DeleteJobsPage from './components/deletejob';
import AddJobPage from './components/addjobs';
import UpdateStatusPage from './components/update';



function App() {
  const handleUpdateStatus = (userId, status) => {
    // Your update status logic goes here
    console.log(`Update status for user ${userId} to ${status}`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/job" element={<JobPage/>} />
        <Route path="/admindash" element={<AdminDashboardPage/>}/>
        <Route path="/userdetails" element={<UserDetails/>}/>
        <Route path="/deletejobs" element={<DeleteJobsPage/>}/>
        <Route path="/add" element={<AddJobPage/>}/>
        
        <Route
          path="/update"
          element={<UpdateStatusPage onUpdateStatus={handleUpdateStatus} />}
        />
        
      </Routes>
    </Router>
  );
}

export default App;
