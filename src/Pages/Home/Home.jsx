import React, { use } from 'react';
import Banner from '../../Components/Banner/Banner';
import DoctorCard from '../../Components/DoctorCard/DoctorCard';

const Home = ({doctorsPromise}) => {

    const doctors = use(doctorsPromise);
    console.log(doctors);
    return (
        <div className='min-h-screen text-center content-center bg-gray-100 max-w-7xl mx-auto'>
            <Banner></Banner>
            <h1 className='text-4xl font-bold mb-5'>Our Best Doctors</h1>
            <p className='max-w-[900px] mx-auto mb-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-3 gap-5 mb-10'>
                {
                    doctors.map(doctor=><DoctorCard doctor={doctor} key={doctor.reg_no}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default Home;