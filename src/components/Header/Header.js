import React from 'react';
import { Link } from 'react-router-dom';
import "../Header/Header.css"

function Header() {
  return (
    <div>
      <Link to="/">
        <h2>QuizClub</h2>
      </Link>
    </div>
  );
}

export default Header;
