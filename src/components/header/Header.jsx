import React from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = () => (
  <>
    <Link to="/signup">Signup</Link>
  </>
);

const Header = () => {

  return (
    <AuthLinks />
  );
};

export default Header;
