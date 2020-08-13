import React, { useState, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup } from '../../services/auth';

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const authService = (serviceFn, ...args) => {
    setAuthError(null);
    return serviceFn(...args)
      .then(user => setCurrentUser(user))
      .catch(err => setAuthError(err));
  };

  const signup = (email, password, profileImage) =>
    authService(fetchSignup, email, password, profileImage);

  return (
    <AuthContext.Provider value={{ currentUser, authError, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
