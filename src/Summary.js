import React from 'react';
import summaryLogo from './pictures/summary.jpg';

const Summary = () => {
  return (
    <section>
      <img src={summaryLogo} alt="summary Image" className="summary-image" />
      <h2>Going Places</h2>
      <p>Welcome to ShotsByAman.
        Welcome to ShotsByAman, a captivating visual journey captured through the lens of a mobile phone as I travel across diverse countries and cities. Embark on an immersive experience as I share the world's beauty and uniqueness, frozen in stunning photographs taken during my adventures.
      </p>
    </section>
  );
};

export default Summary;
