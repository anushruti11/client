import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '1.5rem',
        background: '#0F1624',
        color: '#fff',
        height: '10vh',
        textDecoration: 'none',
      }}
    >
      <Link to="/">Touristy Icon</Link>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '3rem' }}>
          <Link to="/contact">Cart</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
