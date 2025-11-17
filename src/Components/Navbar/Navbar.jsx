import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
const Navbar = () => {
    return (
        <div className='bg-white px-5 shadow-sm'>
            <div className='max-w-7xl mx-auto py-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-10' />
                    <h1 className='text-2xl font-semibold'>DocTalk</h1>
                </div>
                <ul className='flex items-center gap-8'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/my-bookings">My Bookings</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
                <button className='px-5 py-2 rounded-full bg-blue-600 text-white'>Emergency</button>
            </div>
        </div>
    );
};

export default Navbar;