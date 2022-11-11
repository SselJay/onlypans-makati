import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="container-fluid m-0 p-0">
        <nav className="navbar navbar-light bg-danger container-fluid">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand h1 text-white">
                    <i className="fa fa-home text-white"></i>Home
                </Link>
                <Link to="/admin" className='navbar-toggler text-decoration-none text-white'>
                    <i className="fa fa-user text-white"></i>View Menu List
                </Link>
                <Link to="/add" className='navbar-toggler text-decoration-none text-white'>
                    <i className="fa fa-plus text-white"></i>Add Menu Item
                </Link>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;
