// DeleteJobsPage.jsx

import { useState } from 'react';
import  'E:/advApp/job-app/src/assets/css/joblist.css';
import AdminDrawer from '../pages/admindrawer';
const WishlistJobsPage = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Job 1' },
    { id: 2, title: 'Job 2' },
    { id: 3, title: 'Job 3' },
    { id: 4, title: 'Job 4' },
    { id: 5, title: 'Job 5' },
    { id: 6, title: 'Job 6' },
    { id: 7, title: 'Job 7' },
    { id: 8, title: 'Job 8' },
    { id: 9, title: 'Job 9' },
    { id: 10, title: 'Job 10' },
    { id: 11, title: 'Job 12' },
    { id: 12, title: 'Job 13' },
    
    // Add more job entries as needed
  ]);

  const handleDelete = (id) => {
    // Remove the job with the given id
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div className='user-details-container'>
    <header className="navbar">
    <div className="nav-content">
    <AdminDrawer />
    <h2 className="nav-title">My Wishlist</h2>
    </div>
    </header>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <button onClick={() => handleDelete(job.id)}>Apply</button>
            <button onClick={() => handleDelete(job.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistJobsPage;
