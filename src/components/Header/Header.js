import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">
        <h2>Let's Fun & Gain Some Knowledge!</h2>
      </Link>
    </div>
  );
}

export default Header;
