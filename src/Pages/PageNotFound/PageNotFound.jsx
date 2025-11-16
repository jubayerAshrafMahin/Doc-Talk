import React from 'react';
import pageNotFound2 from '../../assets/404_page_not_found_2.jpg';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router';


const PageNotFound = () => {
    
    const navigate = useNavigate();
    document.title = "DocTalk | Page not found";
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className='grow content-center text-center'>
                <img src={pageNotFound2} alt="Error Image" className='mx-auto mb-3 w-[250px] rounded-xl' />
                <p className='text-4xl font-bold mb-3'>Page Not Found</p>
                <p className='text-base font-normal text-gray-600 lh-1 mb-3'>Oop! Looks like the page you are looking for<br /> is not available at this moment.</p>
                <button className='px-6 py-2 rounded-full text-blue-600 border border-blue-600 mr-2 cursor-pointer' onClick={()=>navigate(-1)}>Go Back</button>
                <button className='px-6 py-2 rounded-full bg-blue-600 text-white border border-blue-600 cursor-pointer' onClick={()=>navigate('/')}>Go Home</button>
            </div>
        </div>
    );
};

export default PageNotFound;