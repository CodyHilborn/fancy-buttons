import React from 'react';

const AngryButton = () => {
  return (
    <button className='AndryButton'>
      {/* If you have NOT reached the maximum */}
      <span>Don't click me too much!</span>
      {/* If you HAVE reached the maximum */}
      <span>Rawr!</span>
    </button>
  );
};

export default AngryButton;
