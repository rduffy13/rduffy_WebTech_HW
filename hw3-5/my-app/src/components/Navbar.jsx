import React from 'react';

import { Outlet, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <h1> Game of Thrones Navigation Bar</h1>
      <nav className="nav1">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/houses">
              Houses
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;