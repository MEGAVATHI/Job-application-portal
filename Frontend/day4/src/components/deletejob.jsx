// DeleteJobsPage.jsx

import { useState } from 'react';
import  'E:/advApp/job-app/src/assets/css/joblist.css';
import AdminDrawer from '../pages/admindrawer';
const DeleteJobsPage = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Job 1' },
    { id: 2, title: 'Job 2' },
    { id: 3, title: 'Job 3' },
    { id: 1, title: 'Job 1' },
    { id: 2, title: 'Job 2' },
    { id: 3, title: 'Job 3' },
    { id: 1, title: 'Job 1' },
    { id: 2, title: 'Job 2' },
    { id: 3, title: 'Job 3' },
    { id: 1, title: 'Job 1' },
    { id: 2, title: 'Job 2' },
    { id: 3, title: 'Job 3' },
    
    // Add more job entries as needed
  ]);

  const handleDelete = (id) => {
    // Remove the job with the given id
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div>
    <header className="navbar">
    <div className="nav-content">
    <AdminDrawer />
    <h2 className="nav-title">Delete Jobs</h2>
    </div>
    </header>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <button onClick={() => handleDelete(job.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteJobsPage;
