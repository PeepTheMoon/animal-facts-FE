import React, { useContext } from 'react';

export const AuthContext = React.createContext();

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};
