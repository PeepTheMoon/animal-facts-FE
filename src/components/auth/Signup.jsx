import React, { useState } from 'react';
import { useSignup } from '../../hooks/AuthContext';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const signup = useSignup();
  const history = useHistory();

  const handleChange = ({ target }) => {
    if(target.name === 'username') setUsername(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'profileImage') setProfileImage(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup(username, password, profileImage)
      .then(() => history.push('/dashboard'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="username"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
        
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />

      <input
        type="url"
        name="profileImage"
        placeholder="Profile Image"
        value={profileImage}
        onChange={handleChange}
      />

      <button>Signup</button>
    </form>
  );
};

export default Signup;
