import React, { useState } from 'react';

const AngryButton = () => {
  const [anger, setAnger] = useState(0);

  return (
    <button className='AndryButton' style={{ backgroundColor: `rgba(255, 0, 0, ${anger})` }}>

      {anger < 1 && <span>Don't click me too much!</span>}
      {anger > 1 && <span>Rawr!</span>}

    </button>
  );
};

export default AngryButton;
