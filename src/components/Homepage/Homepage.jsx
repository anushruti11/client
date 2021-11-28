import { useState } from 'react';
import background from '../../assets/back.jpg';

const Homepage = () => {
  const [state, setState] = useState('');
  return (
    <div
      style={{
        background: '#0F1624',
      }}
    >
      <img src={background} alt="background" width="100%" height="500" />
      <div
        style={{
          marginLeft: '6rem',
          position: 'absolute',
          top: '10rem',
          background: 'hsla(0,0%,100%,.85)',
          boxShadow: '0 0 2rem 0 rgb(0 0 0 / 29%)',
          borderRadius: '1rem',
          padding: '1rem',
          color: '#000',
          width: '32rem',
          height: '15rem',
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Find amazing things of INDIA! Anytime and everywhere
        </div>
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Where are you going?"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <input type="button" value="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
