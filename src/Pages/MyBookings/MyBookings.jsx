import React, { use, useContext, useEffect } from 'react';
import { ToastContext } from '../Root/Root';
import { showSuccessToast } from '../../Utils/showToast';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import { getAppointment } from '../../Utils/addAppointment';

const MyBookings = ({ doctorsPromise }) => {
    const doctors = use(doctorsPromise);
    const [toastShowing, setToastShowing] = useContext(ToastContext);
    const appointment = getAppointment();
    useEffect(() => {
        if (toastShowing) {
            showSuccessToast();
            console.log("Toast showing");
            setToastShowing(false); // Reset after showing toast
        }
    }, [toastShowing, setToastShowing]);

    document.title = "DocTalk | My Bookings"
    return (
        <div className='min-h-screen max-w-7xl mx-auto content-center text-center'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {appointment.length===0 && <NoBookingsYet />}
        </div>
    );
};

function NoBookingsYet() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-3xl font-bold mb-3'>You have not booked any appointment yet.</h1>
            <p className='text-gray-700'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <button className='px-5 py-2 rounded-full bg-blue-600 text-white mt-5 w-fit cursor-pointer' onClick={()=>{navigate('/')}}>Book an Appointment</button>
        </div>
    )
}

export default MyBookings;