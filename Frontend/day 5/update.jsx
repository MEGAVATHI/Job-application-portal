import  { useState } from 'react';
import PropTypes from 'prop-types';
import 'E:/advApp/job-app/src/assets/css/userdetails.css';
import AdminDrawer from '../pages/admindrawer';

const UpdateStatusPage = ({ onUpdateStatus }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleStatusChange = (e, userId) => {
    setSelectedStatus(e.target.value);
    setSelectedUserId(userId);
  };

  const handleUpdateStatus = () => {
    if (selectedUserId && selectedStatus) {
      onUpdateStatus(selectedUserId, selectedStatus);
      setSelectedUserId(null);
      setSelectedStatus('');
      setShowSuccessMessage(true);
    }
  };

  const dummyUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending', CompanyApplied: 'abc', Role: 'analyst' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'approved', CompanyApplied: 'mine', Role: 'analyst' },
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending', CompanyApplied: 'abc', Role: 'analyst' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'approved', CompanyApplied: 'mine', Role: 'analyst' },
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending', CompanyApplied: 'abc', Role: 'analyst' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'approved', CompanyApplied: 'mine', Role: 'analyst' },
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending', CompanyApplied: 'abc', Role: 'analyst' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'approved', CompanyApplied: 'mine', Role: 'analyst' },
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'pending', CompanyApplied: 'abc', Role: 'analyst' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'approved', CompanyApplied: 'mine', Role: 'analyst' },
   
  ];

  return (
    <div className='user-details-container'>
      <header className="navbar">
        <div className="nav-content">
          <AdminDrawer />
          <h2 className="nav-title">Update Status</h2>
        </div>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Company Applied</th>
              <th>Role Applied</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{user.CompanyApplied}</td>
                <td>{user.Role}</td>
                <td>
                  <select onChange={(e) => handleStatusChange(e, user.id)}>
                    <option value="">Select Status</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <button className="update-button" onClick={handleUpdateStatus}>
          Update Selected User Status
        </button>
      </div>
      
      {showSuccessMessage && (
        <div className="success-message">
          Status Updated Successfully!
        </div>
      )}
    </div>
  );
};

UpdateStatusPage.propTypes = {
  onUpdateStatus: PropTypes.func.isRequired,
};

export default UpdateStatusPage;
