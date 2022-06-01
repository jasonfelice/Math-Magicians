import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      name: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      name: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      name: 'Quote',
    },
  ];

  return (
    <header>
      <a href="../index.html"><h1>Math Magicians</h1></a>
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
