import './Homepage.css';

const TopDestination = ({ item }) => {
  console.log(item.places);
  return (
    <div
      style={{
        borderRadius: '50px',
        boxShadow: '30px 30px 60px #080c14,-30px -30px 60px #162034',
        maxWidth: '1200px',
        margin: '2rem',
      }}
    >
      <div
        style={{
          padding: '1rem',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '60rem', display: 'flex' }}>
            <div>
              <img src={item.mainImg} alt="Bihar" width="300" height="300" />
            </div>
            <div style={{ padding: '0rem 1rem 1rem 1rem' }}>
              <div
                style={{
                  marginBottom: '0.5rem',
                  fontSize: '3rem',
                  fontWeight: '500',
                }}
              >
                {item.name}
              </div>
              <div>{item.description}</div>
              {/* badges */}
              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                }}
              >
                {item.badges.map((badge) => {
                  return <div className="destination-badge">{badge}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* destinations */}
      <div style={{ padding: '1rem' }}>
        <div
          style={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          Iconic Places
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {item.places.map((place) => {
            return (
              <div
                style={{
                  background: '#fff',
                  width: '300px',
                  height: '200px',
                  padding: '0.5rem',
                  margin: '1rem',
                }}
              >
                <img src={place.subImg} alt="item" width="200" height="80" />
                <div
                  style={{
                    color: '#63687A',
                    fontSize: '1rem',
                    textAlign: 'center',
                  }}
                >
                  {place.area}
                </div>
                <div style={{ color: '#63687A', marginBottom: '0.5rem' }}>
                  {place.description}
                </div>
                <input type="button" value="Order Now!" />
              </div>
            );
          })}
        </div>
      </div>
      {/* antique things */}
      <div style={{ padding: '1rem' }}>
        <div
          style={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          Top Antique Things Indegineous To That Place
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {item.items.map((thing) => {
            return (
              <div
                style={{
                  background: '#fff',
                  width: '300px',
                  height: '200px',
                  padding: '0.5rem',
                  margin: '1rem',
                }}
              >
                <img src={thing.itemImg} alt="item" width="200" height="80" />
                <div
                  style={{
                    color: '#000',
                    fontSize: '1rem',
                    textAlign: 'center',
                  }}
                >
                  {thing.itemName}
                </div>
                <div style={{ color: '#63687A', marginBottom: '0.5rem' }}>
                  {thing.description}
                </div>
                <input type="button" value="Order Now!" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
