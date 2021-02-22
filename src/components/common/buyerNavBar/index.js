import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './buyerNavStyles.css';
import { useOktaAuth } from '@okta/okta-react';
import NavCart from '../shoppingCart/NavCart';

function BuyerNavBar({ searchVisible, data, setData }) {
  const { authState, authService } = useOktaAuth();
  return (
    <div className="buyer-nav-container">
      <div className="buyer-nav">
        <div className="logo">
          <NavLink to="/" activeStyle={{ color: 'black' }}>
            <span style={{ color: 'rebeccapurple' }}>MERCHANT</span> MARKETPLACE
          </NavLink>
        </div>

        <div className="navbar-links">
          <Link to="/myprofile">Seller Profile</Link>
          <Link to="#">Let's Shop</Link>
          <Link to="#">Orders</Link>
          <Link to="#">Favorites</Link>
        </div>

        <NavCart />

        <Link to="/myprofile">Seller Profile</Link>
        <Link to="/buyerprofile/lets_shop">Let's Shop</Link>
        <Link>Orders</Link>
        <Link>Favorites</Link>

      </div>
    </div>
  );
}

export default BuyerNavBar;
