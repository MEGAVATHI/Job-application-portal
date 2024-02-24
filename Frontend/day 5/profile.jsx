// ProfilePage.jsx
import { useState } from 'react';
import TemporaryDrawer from '../pages/drawer';
import 'E:/advApp/job-app/src/assets/css/profile.css'; // Include your CSS file path

const ProfilePage = () => {
  // Sample user data
  const initialUser = {
    id: 1,
    name: 'John Doe',
    age: 25,
    gender: 'Male',
    email: 'john@example.com',
    phoneNumber: '123-456-7890',
    // Add more user details as needed
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...initialUser });
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showAppliedJobs, setShowAppliedJobs] = useState(false);
  
  
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Logic to save the edited user data
    setEditing(false);
    setUser(editedUser);
    // Update the user data with the editedUser data
    // You can handle this based on your application's state management
  };

  const handleCancelClick = () => {
    // Cancel the editing and reset the editedUser to the original user data
    setEditing(false);
    setEditedUser({ ...user });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the editedUser data based on the input changes
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleViewAppliedJobs = () => {
    // Logic to fetch and set applied jobs
    // For demonstration purposes, let's assume applied jobs are fetched from an API
    const fetchedAppliedJobs = [
      { id: 1, title: 'Frontend Developer', company: 'ABC Inc.',location:'chennai' },
      { id: 2, title: 'Backend Developer', company: 'XYZ Ltd.',location:'chennai'  },
      // Add more applied job entries as needed
    ];
    console.log('Fetched Applied Jobs:', fetchedAppliedJobs); // Add this line
  setAppliedJobs(fetchedAppliedJobs);
  setShowAppliedJobs(true);
  };

  return (
    <div className='user-details-container'>
      {/* Navbar with TemporaryDrawer */}
      <header className="navbar">
        <div className="nav-content">
          <TemporaryDrawer />
          <h2 className="nav-title">My Profile</h2>
        </div>
      </header>

      {/* Profile Content */}
      <main className="profile-container">
        <div className="profile-info">
          {isEditing ? (
            // Editing mode UI
            <>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Age:
                <input
                  type="number"
                  name="age"
                  value={editedUser.age}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Gender:
                <input
                  type="text"
                  name="gender"
                  value={editedUser.gender}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={editedUser.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              {/* Add more input fields for other user details */}
            </>
          ) : (
            // Display mode UI
            <>
              <h2>{user.name}</h2>
              <p>Age: {user.age}</p>
              <p>Gender: {user.gender}</p>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phoneNumber}</p>
              {/* Display other user details */}
              <button onClick={handleViewAppliedJobs}>View Applied Jobs</button>
            </>
          )}

          {/* Edit/Save/Cancel Buttons */}
          {isEditing ? (
            // Editing mode buttons
            <>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            // Display mode buttons
            <button onClick={handleEditClick}>Edit Profile</button>
          )}
        </div>
      </main>

      {/* Display Applied Jobs */}
      {showAppliedJobs && (
  <div className="applied-jobs-container">
    <h3>Applied Jobs</h3>
    <ul>
      {appliedJobs.map((job) => (
        <li key={job.id}>
          <strong>{job.title}</strong> at {job.company} - {job.location}
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};

export default ProfilePage;
