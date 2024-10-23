import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-primary p-4 text-white">
    <ul className="flex space-x-4">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/gallery">Galería</Link></li>
      <li><Link to="/about">Sobre mí</Link></li>
      <li><Link to="/contact">Contacto</Link></li>
    </ul>
  </nav>
);

export default Navbar;
