import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">User Data Table</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Email</th>
            <th>About Me</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.aboutMe}</td>
              <td>{user.streetAddress}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zip}</td>
              <td>{user.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}

export default DataTable;
