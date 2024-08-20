import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [config, setConfig] = useState({
    page2: 'aboutMe',
    page3: 'address',
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/config');
        console.log('Admin Config fetched:', response.data); 
        setConfig(response.data);
      } catch (error) {
        console.error('Error fetching config:', error);
      }
    };

    fetchConfig();
  }, []);

  const handleChange = (e) => {
    setConfig({
      ...config,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/config', config);
      alert('Configuration saved successfully!');
    } catch (error) {
      console.error('Error saving config:', error);
    }
  };

  return (
    <div>
      <h1>Admin Settings</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Step 2 Component</label>
          <select name="page2" value={config.page2} onChange={handleChange}>
            <option value="aboutMe">About Me</option>
            <option value="birthdate">Birthdate</option>
          </select>
        </div>
        <div>
          <label>Step 3 Component</label>
          <select name="page3" value={config.page3} onChange={handleChange}>
            <option value="address">Address</option>
            <option value="birthdate">Birthdate</option>
          </select>
        </div>
        <button type="submit">Save Config</button>
      </form>
    </div>
  );
}

export default Admin;
