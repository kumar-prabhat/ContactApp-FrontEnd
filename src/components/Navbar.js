import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> Kisan Network
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/contacts'>Contacts</Link>
        </li>
        <li>
          <Link to='/history'>Message History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
