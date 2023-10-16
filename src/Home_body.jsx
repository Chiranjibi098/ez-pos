import React from 'react';

const HomeBody = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    backgroundColor: '#f9f9f9', // Adjust this value to control the vertical alignment
  };

  return (
    <div style={containerStyle}>
      <h1>No orders!</h1>
      <p>We'll let you know when something happens</p>
    </div>
  );
};

export default HomeBody;
