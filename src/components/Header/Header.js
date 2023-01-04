import React from 'react';
import { Link } from 'react-router-dom';
import "../Header/Header.css"

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <h2>
          Quiz<span>Club</span>
        </h2>
      </Link>
    </div>
  );
}

export default Header;
