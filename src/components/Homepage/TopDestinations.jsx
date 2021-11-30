import './Homepage.css';

const TopDestination = () => {
  return (
    <>
      <div style={{ padding: '1rem' }}>
        <div
          style={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: '700',
          }}
        >
          Explore our top destinations
        </div>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '60rem', display: 'flex' }}>
            <div>
              <img
                src="https://cdn.getyourguide.com/img/location/5ffeb528d3d6f.jpeg/68.webp"
                alt="Bihar"
              />
            </div>
            <div style={{ padding: '0rem 1rem 1rem 1rem' }}>
              <div
                style={{
                  marginBottom: '0.5rem',
                  fontSize: '3rem',
                  fontWeight: '500',
                }}
              >
                Bihar
              </div>
              <div>
                In ancient and classical India, the area that is now Bihar was
                considered a centre of power, learning, and culture.[15] From
                Magadha arose India's first empire, the Maurya empire, as well
                as one of the world's most widely adhered-to religions:
              </div>
              {/* badges */}
              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                }}
              >
                <div className="destination-badge">Sightseeing Tours</div>
                <div className="destination-badge">Sightseeing Tours</div>
                <div className="destination-badge">Sightseeing Tours</div>
                <div className="destination-badge">Sightseeing Tours</div>
                <div className="destination-badge">Sightseeing Tours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopDestination;
