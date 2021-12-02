import './Homepage.css';
import { useState } from 'react';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const TopDestination = ({ item }) => {
  const [name, setName] = useState('');

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const data = await fetch('http://localhost:1337/razorpay', {
      method: 'POST',
    }).then((t) => t.json());

    console.log('dataaa', data);

    const options = {
      key: 'rzp_test_7NFjEzrn3WQR0c',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Donation',
      description: 'Thank you for nothing. Please give us some money',
      image: 'http://localhost:1337/logo.svg',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: '',
        phone_number: '',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
                {item.badges.map((badge, index) => {
                  return (
                    <div key={index} className="destination-badge">
                      {badge}
                    </div>
                  );
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
          {item.places.map((place, index) => {
            return (
              <div
                key={index}
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
                <input
                  type="button"
                  value="Order Now!"
                  onClick={displayRazorpay}
                />
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
          {item.items.map((thing, index) => {
            return (
              <div
                key={index}
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
                <input
                  type="button"
                  value="Order Now!"
                  onClick={displayRazorpay}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
