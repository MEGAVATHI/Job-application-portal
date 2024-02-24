// JobPage.jsx
import { useState } from 'react';
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
 
  const [showApplied, setShowApplied] = useState({});
  const [showApplyForm, setShowApplyForm] = useState({});

  const handleApplyClick = (jobId) => {
    setShowApplyForm((prevForms) => ({ ...prevForms, [jobId]: !prevForms[jobId] }));
  
    // If closing the form, do not reset the applied state
    if (!showApplyForm[jobId] && !showApplied[jobId]) {
      setShowApplied((prevApplied) => ({ ...prevApplied, [jobId]: false }));
    }
  };
  

  const handleFormSubmit = (e, jobId) => {
    e.preventDefault();
  
    // Handle the form submission logic here
  
    // Show the applied message for 2 seconds
    setShowApplied((prevApplied) => ({ ...prevApplied, [jobId]: true }));
    setTimeout(() => {
      // Reset the form after 2 seconds
      setShowApplyForm((prevForms) => ({ ...prevForms, [jobId]: false }));
      setShowApplied((prevApplied) => ({ ...prevApplied, [jobId]: false }));
    }, 2000);
  };

  return (
    <div className='user-details-container'>
      {/* Navbar with TemporaryDrawer */}
      <header className="navbar">
        <div className="nav-content">
          <TemporaryDrawer />
          <h2 className="nav-title">Job Listings</h2>
        </div>
      </header>

      {/* Job Listings */}
      <main className="job-list-container">
        <h1>Available Opportunities</h1>
        <div className="job-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-item">
              <h3>{job.title}</h3>
              <p>{job.company} - {job.location}</p>
              {/* Add more job details as needed */}
              {showApplied[job.id] ? (
                <div className="applied-message">Applied!</div>
              ) : (
                <button className="apply-button" onClick={() => handleApplyClick(job.id)}>
                  {showApplyForm[job.id] ? 'Close Form' : 'Apply Now'}
                </button>
              )}
              <div className="button-space"></div>
              <button className="wishlist-button">Add to Wishlist</button>
            </div>
          ))}
        </div>
      </main>

      {/* Apply Form */}
      {jobs.map((job) => (
        showApplyForm[job.id] && (
          <div key={job.id} className="apply-form-container">
            <form onSubmit={(e) => handleFormSubmit(e, job.id)} className="apply-form">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Age:
                <input type="number" name="age" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Phone Number:
                <input type="tel" name="phone" required />
              </label>
              <label>
                Upload Resume:
                <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>
        )
      ))}
    </div>
  );
};

export default JobPage;