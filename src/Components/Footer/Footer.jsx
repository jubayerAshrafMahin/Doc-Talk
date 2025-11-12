import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto py-8 flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="logo" className='w-8' />
                <h1 className='text-xl font-semibold'>DocTalk</h1>
            </div>
            <ul className='flex items-center gap-6 text-sm'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/my-bookings">My Bookings</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/k">Contact</NavLink>
            </ul>
            <hr className='border border-gray-300 w-full' />
            <ul className='flex items-center gap-12 justify-center'>
                <li><i class="fa-brands fa-facebook text-2xl text-blue-950"></i></li>
                <li><i class="fa-brands fa-square-instagram text-2xl text-blue-950"></i></li>
                <li><i class="fa-brands fa-linkedin text-2xl text-blue-950"></i></li>
                <li><i class="fa-brands fa-youtube text-2xl text-blue-950"></i></li>
            </ul>
        </div>
    );
};

export default Footer;