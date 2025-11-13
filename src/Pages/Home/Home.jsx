import React, { use } from 'react';
import Banner from '../../Components/Banner/Banner';
import DoctorCard from '../../Components/DoctorCard/DoctorCard';
import successDoctor from '../../assets/successDoctor.png';
import successPatients from '../../assets/success-patients.png';
import successReview from '../../assets/success-review.png';
import successStuffs from '../../assets/success-staffs.png';

const successInfo=[
        {
            id: 1,
            title: "Total Doctors",
            number: 150,
            image: successDoctor
        },
        {
            id: 2,
            title: "Total Reviews",
            number: 550,
            image: successReview
        },
        {
            id: 3,
            title: "Total Patients",
            number: 2400,
            image: successPatients
        },
        {
            id: 4,
            title: "Total Stuffs",
            number: 300,
            image: successStuffs
        }
    ]

const Home = ({doctorsPromise}) => {

    const doctors = use(doctorsPromise);
    console.log(doctors);

    
    return (
        <div className='min-h-screen text-center content-center bg-gray-100 max-w-7xl mx-auto pb-20'>
            <Banner></Banner>
            <h1 className='text-4xl font-bold mb-5'>Our Best Doctors</h1>
            <p className='max-w-[900px] mx-auto mb-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-3 gap-5 mb-10'>
                {
                    doctors.map(doctor=><DoctorCard doctor={doctor} key={doctor.reg_no}></DoctorCard>)
                }
            </div>
            <h1 className='text-4xl font-bold mb-5'>We Provide Best Medical Services</h1>
            <p className='max-w-[900px] mx-auto mb-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid grid-cols-4 gap-5'>
                {
                    successInfo.map(success=><SuccessCard key={success.id} success={success}></SuccessCard>)
                }
            </div>
        </div>
    );
};

const SuccessCard = ({success}) =>{
    return(
        <div className='bg-white rounded-lg py-5 px-10 text-left'>
            <img src={success.image} alt="image" className='mb-2'/>
            <h1 className='text-3xl font-extrabold mb-2'>{success.number}+</h1>
            <p className='text-gray-600'>{success.title}</p>
        </div>
    )
}

export default Home;