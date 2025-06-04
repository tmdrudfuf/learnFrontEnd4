import React from 'react';

const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
};

const contentStyle = {
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  borderRadius: '8px',
};

export default function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
}