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
                <li><a href="https://www.facebook.com/mahin.ashraf.731" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook text-2xl text-blue-950"></i></a></li>
                <li><a href="https://www.linkedin.com/in/jubayer-ashraf-mahin-ba2780337/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin text-2xl text-blue-950"></i></a></li>
                <li><a href="https://github.com/jubayerAshrafMahin" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github text-2xl text-blue-950"></i></a></li>
            </ul>
        </div>
    );
};

export default Footer;