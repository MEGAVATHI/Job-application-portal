// JobPage.jsx

import TemporaryDrawer from '../pages/drawer';
import 'E:/advApp/job-app/src/assets/css/joblist.css'
const JobPage = () => {
  // Dummy data for jobs
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Inc.', location: 'City A' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Ltd.', location: 'City B' },
    { id: 3, title: 'Frontend Developer', company: 'ABC Inc.', location: 'City A' },
    { id: 4, title: 'Backend Developer', company: 'XYZ Ltd.', location: 'City B' },
    { id: 5, title: 'Frontend Developer', company: 'ABC Inc.', location: 'City A' },
    { id: 6, title: 'Backend Developer', company: 'XYZ Ltd.', location: 'City B' },
    { id: 7, title: 'Frontend Developer', company: 'ABC Inc.', location: 'City A' },
    { id: 8, title: 'Backend Developer', company: 'XYZ Ltd.', location: 'City B' },
    { id: 19, title: 'Frontend Developer', company: 'ABC Inc.', location: 'City A' },
    { id: 10, title: 'Backend Developer', company: 'XYZ Ltd.', location: 'City B' },
    // Add more job entries as needed
  ];

return (
    <div>
    {/* Navbar with TemporaryDrawer */}
    <header className="navbar">
      <div className="nav-content">
        <TemporaryDrawer />
        <h2 className="nav-title">Job Listings</h2>
      </div>
    </header>

    {/* TemporaryDrawer for navigation */}

    {/* Job Listings */}
    <main className="job-list-container">
      <h1>Available Opportunities</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            {/* Add more job details as needed */}
          </div>
        ))}
      </div>
    </main>
  </div>
);
};


export default JobPage;
