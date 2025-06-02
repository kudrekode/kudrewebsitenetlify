import React from 'react';
import RainAnimation from '../background/RainAnimation';
import './Contact.css';
import BackButton from '../components/BackButton';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <RainAnimation />
      <BackButton />

      <div className="contact-content">
        <h1>CONTACT</h1>
            <p>If you wish to get in touch with us
                please send an email to <a href="mailto:kudreband@gmail.com
                ">kudreband@gmail.com </a>
            </p>

            <div className="contact-img-container">
                <img src="assets/band-images/jacksonandjames.jpg" alt="Kudre Band" className="central-image" />
            </div>

          </div>
        </div>
  );
};

export default Contact;