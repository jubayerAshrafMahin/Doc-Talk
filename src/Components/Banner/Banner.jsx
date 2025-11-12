import React from 'react';

const Banner = () => {
    return (
        <div className='my-5 rounded-2xl border-3 border-white px-10 max-w-7xl mx-auto h-fit py-20 bg-linear-to-t from-white to-transparent'>
            <div>
                <h1 className='text-5xl font-bold mb-5'>Dependable Care, Backed by Trusted<br />Professionals.</h1>
                <p className='max-w-[900px] mx-auto mb-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className='flex items-center justify-center gap-3 max-w-[750px] mx-auto mb-10'>
                    <input type="text"className='border-1 border-gray-300 rounded-full py-2 px-5 bg-white grow' placeholder='Search any doctor...' />
                    <button className='px-5 py-2 rounded-full bg-blue-600 text-white'>Search Now</button>
                </div>
            </div>
            <div className='flex flex-nowrap gap-5'>
                <div className='rounded-lg h-[420px] flex-1'>
                    <img src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="doctor's image" 
                    className='rounded-lg h-full object-cover'/>
                </div>
                <div className='rounded-lg h-[420px] flex-1'>
                    <img src="https://plus.unsplash.com/premium_photo-1661440079621-409e19e68c71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="doctor's image" 
                    className='rounded-lg h-full object-cover'/>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;