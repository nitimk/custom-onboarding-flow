import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    aboutMe: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    birthdate: ''
  });

  const [config, setConfig] = useState({
    page2: 'aboutMe', // default to aboutMe
    page3: 'address'  // default to address
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/config');
        setConfig(response.data); // Assume response.data has { page2: '...', page3: '...' }
      } catch (error) {
        console.error('Error fetching config:', error);
      }
    };

    fetchConfig();
  }, []);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit formData to the backend
    axios.post('http://localhost:5000/api/onboarding', formData)
      .then(response => console.log('User data saved:', response.data))
      .catch(error => console.error('Error saving user data:', error));
  };

  return (
    <div>
      <h1>Onboarding</h1>
      {step === 1 && (
        <div>
          <h2>Step 1: Account Information</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: {config.page2 === 'aboutMe' ? 'About You' : 'Your Birthdate'}</h2>
          {config.page2 === 'aboutMe' && (
            <textarea
              name="aboutMe"
              placeholder="About Me"
              value={formData.aboutMe}
              onChange={handleChange}
            />
          )}
          {config.page2 === 'birthdate' && (
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
            />
          )}
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: {config.page3 === 'address' ? 'Address Information' : 'Your Birthdate'}</h2>
          {config.page3 === 'address' && (
            <>
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip"
                value={formData.zip}
                onChange={handleChange}
              />
            </>
          )}
          {config.page3 === 'birthdate' && (
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
            />
          )}
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Onboarding;
