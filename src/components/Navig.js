import React from 'react';
import { NavLink } from 'react-router-dom';

const Navig = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navig-container">
      <span className="title">Bookstore CMS</span>
      <ul className="navBar">
        {links.map((link) => <li key={link.id}><NavLink to={link.path}>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
};
export default Navig;
