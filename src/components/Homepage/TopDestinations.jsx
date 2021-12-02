import './Homepage.css';
import axios from 'axios';

const TopDestination = ({ item }) => {
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

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const result = await axios.post('/payment/orders');

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: 'rzp_test_7NFjEzrn3WQR0c', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'Soumya Corp.',
      description: 'Test Transaction',
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post('/payment/success', data);

        alert(result.data.msg);
      },
      prefill: {
        name: 'Abhi',
        email: 'example@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Example Corporate Office',
      },
      theme: {
        color: '#61dafb',
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
