import React, { useState } from 'react';
import './App.css';

function App() {
  const [details, setDetails] = useState([]);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const addDetails = () => {
    if (newName.trim() && newEmail.trim()) {
      setDetails([...details, { name: newName.trim(), email: newEmail.trim() }]);
      setNewName('');
      setNewEmail('');
    } else {
      alert('Please enter both name and email.');
    }
  };

  return (
    <div>
      <center>
        <h1>Enter your name:</h1>
        <input
          type='text'
          placeholder='Enter Your Name'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <br />
        <h1>Enter your email:</h1>
        <input
          type='email'  // Changed to 'email' for better validation
          placeholder='Enter Your Email'
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <br />
        <button onClick={addDetails}>Add Details</button>
      </center>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.name}</td>
              <td>{detail.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
