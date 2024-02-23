import { useState } from 'react';
import AdminDrawer from '../pages/admindrawer';
import 'E:/advApp/job-app/src/assets/css/joblist.css';
import { useNavigate } from 'react-router-dom';

const AddJobPage = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [newJob, setNewJob] = useState({
      company: '',
      role: '',
      eligibility: '',
      location: '',
    });
    const [isSubmitted, setSubmitted] = useState(false);
    const navigate = useNavigate(); // Use useNavigate for navigation
  
    const handleAddJobClick = () => {
      setFormVisible(true);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // You can handle the form submission logic here
      console.log('New Job Details:', newJob);
      // Reset the form and show success message
      setNewJob({ company: '', role: '', eligibility: '', location: '' });
      setFormVisible(false);
      setSubmitted(true);
  
      // Redirect to the delete job page after a delay (for demonstration purposes)
      setTimeout(() => {
        navigate('/deletejobs'); // Change '/delete-job' to the actual path of your delete job page
      }, 2000); // 2000 milliseconds (2 seconds) delay before redirecting
    };
  
    return (
      <div className="add-job-page">
        <header className="navbar">
          <div className="nav-content">
            <AdminDrawer />
            <h2 className="nav-title">Add Jobs</h2>
          </div>
        </header>
  
        <div className="job-list">
          <div className="add-job-container">
            {!isFormVisible ? (
                <div className="add-job-button-container">
                <button className="add-button" onClick={handleAddJobClick}>
                  Add Job
                </button>
                
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="add-job-form">
                <label>
                  Company:
                  <input
                    type="text"
                    name="company"
                    value={newJob.company}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Role:
                  <input
                    type="text"
                    name="role"
                    value={newJob.role}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Eligibility:
                  <input
                    type="text"
                    name="eligibility"
                    value={newJob.eligibility}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Location:
                  <input
                    type="text"
                    name="location"
                    value={newJob.location}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            )}
            {isSubmitted && <p>Job added successfully!</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default AddJobPage;