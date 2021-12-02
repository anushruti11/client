import { useState } from 'react';
import background from '../../assets/back.jpg';
import data from '../../data';
import TopDestination from './TopDestinations';

const Homepage = () => {
  // const things = data.map((pieces) => pieces.items.map((thing) => thing));
  const [state, setState] = useState('');
  return (
    <div
      style={{
        background: '#0F1624',
      }}
    >
      <img
        src={background}
        alt="background"
        width="100%"
        height="500"
        style={{ opacity: '0.5' }}
      />
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
        <div
          style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '500', color:"#0F1624", fontFamily:"cursive"}}
        >
         <b> Find amazing things of INDIA! Anytime and everywhere </b>
        </div>
        <div>
          <div style={{ marginBottom: '1rem'}} id ="box">
            <input
              id="boxx"
              type="text"
              placeholder="Where are you going?"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div id ="box">
            <input id="boxx" type="button" value="Search" />
          </div>
        </div>
      </div>

      {/* features */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '22%',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <img
              src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt234df6e6b520e8c8/5eec6fff7253820a4364e1fe/ic-thumbs-up.svg"
              alt="flexible booking"
              width="30"
              height="30"
            />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>Flexible Booking</div>
          <div style={{ color: '#63687A' }}>
            With free cancellation up to 24 hours before your activity, there’s
            always room for a change of plans.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '22%',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <img
              src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt56797084b4e2d295/5e6bb7d58c83c26c32eb0bfa/icon-duration.svg"
              alt="flexible booking"
              width="30"
              height="30"
            />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>Quality experiences</div>
          <div style={{ color: '#63687A' }}>
            Read millions of unfiltered reviews from GetYourGuide travelers to
            help you find the best activities.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '22%',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <img
              src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt054c706d0acb19ee/5e6bb7e5b163ab6cedfa1c6d/icon-heart.svg"
              alt="flexible booking"
              width="30"
              height="30"
            />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>Convenient support</div>
          <div style={{ color: '#63687A' }}>
            We’re here 24/7 to make your experience unforgettable, whether it’s
            by phone, email, or WhatsApp.
          </div>
        </div>
      </div>

      {/* top destinations */}
      <div
        style={{
          marginBottom: '2rem',
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: '700',
        }}
      >
        Explore our top destinations
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      
        {data.map((item, index) => {
          return <TopDestination item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
