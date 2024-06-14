import React from 'react';

const Logout: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    window.location.reload();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
