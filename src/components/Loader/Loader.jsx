import React from 'react';

const Loader = ({ color = '#660553' }) => {
  return (
    <div style={{
      height: '100vh',
      width:'100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'rgb(8, 218, 249 , 0.5)',
      zIndex: 1000000 ,
      position:'fixed',
    }}>
      <div style={{ transform: 'scale(4)', width: 'fit-content', height: 'fit-content' }}>
        <div
          style={{
            border: `3px solid ${color}`,
            borderTopColor: "transparent",
            borderRadius: '50%',
            width: '2rem',
            height: '2rem',
            animation: 'spin 0.8s linear infinite'
          }}
        />
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
    
  );
};

export default Loader;
