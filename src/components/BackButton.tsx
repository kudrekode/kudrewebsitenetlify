import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="back-button" 
      onClick={() => navigate('/')}
      aria-label="Go back to home page"
    >
      <i className="fas fa-arrow-left"></i>
    </button>
  );
};

export default BackButton;