// UserDetails.jsx

import AdminDrawer from '../pages/admindrawer';

import 'E:/advApp/job-app/src/assets/css/userdetails.css';


const UserDetailsPage = () => {
  const users = [
    { id: 1, name: 'John Doe', age: 25, gender: 'Male', company: 'ABC Inc.', experience: '3 years', resume: 'path/to/resume1.pdf' },
    { id: 2, name: 'Jane Smith', age: 30, gender: 'Female', company: 'XYZ Ltd.', experience: '5 years', resume: 'path/to/resume2.pdf' },
    { id: 1, name: 'John Doe', age: 25, gender: 'Male', company: 'ABC Inc.', experience: '3 years', resume: 'path/to/resume1.pdf' },
    { id: 2, name: 'Jane Smith', age: 30, gender: 'Female', company: 'XYZ Ltd.', experience: '5 years', resume: 'path/to/resume2.pdf' },
    { id: 1, name: 'John Doe', age: 25, gender: 'Male', company: 'ABC Inc.', experience: '3 years', resume: 'path/to/resume1.pdf' },
    { id: 2, name: 'Jane Smith', age: 30, gender: 'Female', company: 'XYZ Ltd.', experience: '5 years', resume: 'path/to/resume2.pdf' },
    { id: 1, name: 'John Doe', age: 25, gender: 'Male', company: 'ABC Inc.', experience: '3 years', resume: 'path/to/resume1.pdf' },
    { id: 2, name: 'Jane Smith', age: 30, gender: 'Female', company: 'XYZ Ltd.', experience: '5 years', resume: 'path/to/resume2.pdf' },
    { id: 1, name: 'John Doe', age: 25, gender: 'Male', company: 'ABC Inc.', experience: '3 years', resume: 'path/to/resume1.pdf' },
    { id: 2, name: 'Jane Smith', age: 30, gender: 'Female', company: 'XYZ Ltd.', experience: '5 years', resume: 'path/to/resume2.pdf' },
    { id: 1, name: 'John Doe', age: 25, gender: 'Male', company: 'ABC Inc.', experience: '3 years', resume: 'path/to/resume1.pdf' },
    { id: 2, name: 'Jane Smith', age: 30, gender: 'Female', company: 'XYZ Ltd.', experience: '5 years', resume: 'path/to/resume2.pdf' },
    { id: 1, name: 'John Doe', age: 25, gender: 'Male', company: 'ABC Inc.', experience: '3 years', resume: 'path/to/resume1.pdf' },
    { id: 2, name: 'Jane Smith', age: 30, gender: 'Female', company: 'XYZ Ltd.', experience: '5 years', resume: 'path/to/resume2.pdf' },
    // Add more user data as needed
  ];

  return (
    <div>
      {/* Navbar with UserDetails title */}
      <header className="navbar">
        <div className="nav-content">
          <AdminDrawer />
          <h2 className="nav-title">User details</h2>
        </div>
      </header>

      {/* User Details Table */}
      <main className="main-content">
       
        <table className="user-details-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Applied Company</th>
              <th>Experience</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.company}</td>
                <td>{user.experience}</td>
                <td>{user.resume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Footer */}
      <footer>
        {/* Your footer content goes here */}
        <p>&copy; 2022 Your Company</p>
      </footer>
    </div>
  );
};

export default UserDetailsPage;
