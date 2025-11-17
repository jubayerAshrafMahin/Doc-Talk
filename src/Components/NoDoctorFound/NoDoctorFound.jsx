import React from 'react';
import { useNavigate, useParams } from 'react-router';

function NoDoctorFound(){
    const navigate = useNavigate();
    const { reg } = useParams();
        return (
            <div className='content-center text-center min-h-screen'>
                <h1 className='text-3xl font-bold mb-3'>No Doctor Found!</h1>
                <p className='text-gray-700'>No doctor was found with the registration no.</p>
                <p className='py-2 my-2 font-medium text-lg'><i class="fa-solid fa-circle-plus mr-1"></i>{reg}</p>
                <button className='px-5 py-2 rounded-full bg-blue-600 text-white mt-1 w-fit cursor-pointer' onClick={() => { navigate('/') }}>View All Doctors</button>
            </div>
        )
}

export default NoDoctorFound;