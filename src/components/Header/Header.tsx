import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logout from '../Logout/Logout';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <h1 onClick={handleHomeClick}>EduVideo</h1>
      <Logout />
    </header>
  );
};

export default Header;
