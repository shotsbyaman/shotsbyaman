import React from 'react';
import summaryLogo from './pictures/summary.jpg';

const Summary = () => {
  return (
    <section>
      <img src={summaryLogo} alt="summary Image" className="summary-image" />
      <h2>Going Places</h2>
      <p>Welcome to ShotsByAman.
        I haven’t been everywhere, but it’s on my list
      </p>
    </section>
  );
};

export default Summary;
