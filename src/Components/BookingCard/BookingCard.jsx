import React from 'react';

const BookingCard = ({ appointment, handleCancelAppointment }) => {

    return (
        <div className='bg-white rounded-lg py-12 px-12 mt-5'>
            <div className='flex items-center justify-between py-3 border-b border-gray-300 border-dashed mb-4'>
                <div>
                    <h1 className='text-xl font-semibold mb-1'>{appointment.name}</h1>
                    {(appointment.degrees).map((degree, index) => {
                        return (
                            (index != (appointment.degrees).length - 1) ?
                                <span className='text-gray-600 text-sm'>{degree}, </span> :
                                <span className='text-gray-600 text-sm'>{degree} - </span>
                        )
                    })}
                    <span className='text-gray-600 text-sm'>{appointment.specialization}</span>
                </div>
                <p className='text-sm text-gray-700'>Appointment Fee: {appointment.consultation_fee.amount} Taka + VAT</p>
            </div>
            <button className='px-5 py-2 rounded-full text-red-600 border border-red-600 w-full cursor-pointer font-medium bg-red-50' onClick={() => { handleCancelAppointment(appointment.reg_no) }}>Cancel Appointment</button>
        </div>
    );
};

export default BookingCard;