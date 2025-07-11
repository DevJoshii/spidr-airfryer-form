import React, { useState } from 'react';
import './App.css';

function formatSpidrPin(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  const groups = digits.match(/.{1,4}/g);
  return groups ? groups.join('-') : digits;
}

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    costGuess: '',
    pin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pin') {
      setFormData({ ...formData, pin: formatSpidrPin(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Register Your Interest</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9+\-()\s]+"
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guess the Air Fryer’s Cost ($)
          <input
            type="number"
            name="costGuess"
            value={formData.costGuess}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Very, Very Secret 16-Digit Spidr PIN
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            placeholder="####-####-####-####"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;