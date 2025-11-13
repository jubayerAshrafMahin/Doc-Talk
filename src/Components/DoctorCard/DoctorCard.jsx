import React from 'react';
import { useNavigate } from 'react-router';

const DoctorCard = ({doctor}) => {

    const navigate = useNavigate();
    return (
        <div className='rounded-xl p-8 bg-white text-left'>
            <img src={doctor.image_url} alt="doctor's image" className='w-[200px] rounded-lg mx-auto mb-2'/>
            <div className='flex mb-1'>
                {
                    (doctor.is_available)?
                    <span className='px-3 py-1 rounded-full bg-green-500/10 border-[0.5px] border-green-600 text-green-600 text-xs mr-2'>Available</span> :
                    <span className='px-3 py-1 rounded-full bg-red-500/10 border-[0.5px] border-red-600 text-red-600 text-xs mr-2'>Not available</span>
                }
                <span className='px-3 py-1 rounded-full bg-blue-500/10 border-[0.5px] border-blue-600 text-blue-600 text-xs'>{doctor.years_of_experience}+ Years of Experience</span>
            </div>
            <h1 className='text-xl font-medium'>{doctor.name}</h1>
            {(doctor.degrees).map((degree,index)=>{
                return(
                    (index != (doctor.degrees).length-1)?
                    <span className='text-gray-600 text-sm'>{degree}, </span> :
                    <span className='text-gray-600 text-sm'>{degree} - </span>
                )
            })}
            <span className='text-gray-600 text-sm'>{doctor.specialization}</span>
            <p className='text-sm py-2 border-t-[0.5px] border-gray-300 border-dashed my-2'><i class="fa-regular fa-registered"></i>{` Reg No ${doctor.reg_no}`}</p>
            <button className='font-medium px-5 py-2 rounded-full border border-blue-600 text-blue-600 w-full cursor-pointer hover:text-white hover:bg-blue-600 duration-200'
            onClick={()=>navigate('/doctor/'+doctor.reg_no)}>View Details</button>
            {/* 
            {doctor.specialization}
            {doctor.working_at}
            {doctor.reg_no} */}
        </div>
    );
};

export default DoctorCard;