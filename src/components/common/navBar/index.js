import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Badge } from 'antd';
import NavCart from '../shoppingCart/NavCart';

import { Button } from '../../common';
import './navStyles.css';
import SearchBar from '../searchbar';
import { useOktaAuth } from '@okta/okta-react';
import logo from '../inventory-logo.png';

function NavBar({ searchVisible, data, setData }) {
  const { authState, authService } = useOktaAuth();
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          <NavLink to="/" activeStyle={{ color: 'black' }}>
            <span style={{ color: 'rebeccapurple' }}>MERCHANT</span> MARKETPLACE
          </NavLink>
        </div>
        <Link to="/buyerprofile">Buyer Profile</Link>
        <Link to="/myprofile/inventory">Inventory</Link>
        <Link>Orders</Link>
        <Link>Payment</Link>
        <Link>Messages</Link>
        <NavCart />
        <Button handleClick={() => authService.logout()} buttonText="Logout" />
      </div>
      <SearchBar searchVisible={searchVisible} setData={setData} data={data} />
    </div>
  );
}

export default NavBar;
