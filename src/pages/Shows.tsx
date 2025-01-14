import React from 'react';
import RainAnimation from '../background/RainAnimation';
import BackButton from '../components/BackButton';

import './Shows.css';

const Shows: React.FC = () => {
  return (
    <div className="shows-page">
      <RainAnimation />
      <BackButton />

      <div className="content-shows">
        <h1>SHOWS</h1>
        <div className="shows-container">
          <h2>Upcoming Shows</h2>
          <div className="show-list">
            <p>Shows TBC</p>
            <p>Check back soon!</p>
            {/* Add show items here when available */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shows;