import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

interface NavbarProps {
}


const Navbar: React.FC<NavbarProps> = ({ }) => {
    return (
        <nav className='navbar'>
            <div>
                <h2>AJ Johnson</h2>
            </div>
            <div className='ml-auto flex flex-row gap-4'>
                <Link to="home" smooth={true}>Home</Link>
                <Link to="about" smooth={true}>About</Link>
                <Link to="projects" smooth={true}>Projects</Link>
                <Link to="contact" smooth={true}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;