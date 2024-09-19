import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you're importing the correct CSS

const AuthPage = () => {
  const [countdown, setCountdown] = useState(24 * 60 * 60); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, secs };
  };

  const { hours, minutes, secs } = formatTime(countdown);

  return (
    <div className="auth-container">
      <div className="coming-soon">
      <img src={`${process.env.PUBLIC_URL}/White Doctives.png`} alt="Logo" className="logo" /> {/* Add the logo here */}
        <h1>We are launching very soon!</h1>
        <p>Stay tuned for upcoming updates!</p>
        <div className="countdown-timer">
          <div className="timer-circle">{String(hours).padStart(2, '0')}</div>
          <div className="timer-circle">{String(minutes).padStart(2, '0')}</div>
          <div className="timer-circle">{String(secs).padStart(2, '0')}</div>
        </div>
        <img src={`${process.env.PUBLIC_URL}/Doctors-cuate.png`} alt="Coming Soon" className="coming-soon-image" />
      </div>
      <div className="auth-body">
        <div className="auth-header">
          <h1>Join Us as a Doctor!</h1>
          <p>Connect with patients remotely, enjoy flexible hours, and make a real impact—all from the comfort of your couch! Apply now!</p>
        </div>
        <div className='form'>
          {/* All text fields are now in the same div */}
          <input type="text" placeholder="Please enter your email" className="auth-input" />
          <input type="text" placeholder="Please enter your name" className="auth-input" />
          <input type="text" placeholder="Please enter your phone number" className="auth-input" />
          <input type="text" placeholder="Please enter your speciality" className="auth-input" />
         
        </div>
        <button className="auth-button submit">Submit</button>
      </div>
    </div>
  );
};

export default AuthPage;
