import React, { use } from 'react';
import { useParams } from 'react-router';

const Doctor = ({ doctorsPromise }) => {

    const doctors = use(doctorsPromise);
    const { reg } = useParams();
    console.log(doctors, reg);
    const doctor = doctors.find(doc => doc.reg_no === reg);
    console.log(doctor);
    return (
        <div className='max-w-7xl mx-auto pt-5 pb-20 mb-5 '>
            <div className='bg-white rounded-lg py-12 px-5 content-center text-center mb-5'>
                <h1 className='text-3xl font-bold mb-3'>Doctor's Profile</h1>
                <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quisquam voluptatum quia, quaerat modi repellat debitis harum fuga praesentium illo.</p>
            </div>
            <div>
                {/* /doctor's info */}
                <div className='rounded-xl p-12 bg-white text-left flex gap-5 mb-5'>
                    <img src={doctor.image_url} alt="doctor's image" className='w-[300px] mx-auto mb-2' />
                    <div className='grow'>
                        <h1 className='text-3xl font-semibold mb-2'>{doctor.name}</h1>
                        {(doctor.degrees).map((degree, index) => {
                            return (
                                (index != (doctor.degrees).length - 1) ?
                                    <span className='text-gray-600 text-base'>{degree}, </span> :
                                    <span className='text-gray-600 text-base'>{degree}</span>
                            )
                        })}
                        <p className='text-gray-600 text-base mb-2'>{doctor.specialization}</p>
                        <p className='text-gray-600'>Working at</p>
                        <h1 className='text-lg font-medium'>{doctor.working_at}</h1>
                        <p className='text-sm py-3 border-y-[0.5px] border-gray-300 border-dashed my-3'><i class="fa-regular fa-registered"></i>{` Reg No ${doctor.reg_no}`}</p>
                        <span className='font-medium'>Available on </span>
                        {
                            (doctor.availability).map(day => <span className='px-3 py-1 rounded-full bg-green-500/10 border-[0.5px] border-green-600 text-green-600 text-xs ml-2'>{day}</span>)
                        }
                        <p className='font-medium mt-3'>Consultation Fee:
                            <span className='text-blue-600 font-semibold mx-2'>Taka {parseFloat(doctor.consultation_fee.amount).toFixed(2)}</span>
                            <span className='text-gray-600 font-normal'>(inc. vat) Per Consultation</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg py-12 px-12 content-center text-center'>
                <h1 className='text-3xl font-bold mb-5'>Book an Appointment</h1>
                <div className='flex items-center justify-between py-4 border-y border-gray-300 border-dashed mb-5'>
                    <span className='font-medium'>Availability</span>
                    <span className='px-3 py-1 rounded-full bg-green-500/10 border-[0.5px] border-green-600 text-green-600 text-xs'>Doctor is available today</span>
                </div>
                <p className='px-3 py-2 rounded-full bg-yellow-500/10 border-[0.5px] border-yellow-500 text-yellow-500 text-sm'><i class="fa-solid fa-circle-exclamation"></i> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                <button className='px-5 py-2 rounded-full bg-blue-600 text-white mt-5 w-full cursor-pointer'>Book Appointment Now</button>
            </div>
        </div>
    );
};

export default Doctor;