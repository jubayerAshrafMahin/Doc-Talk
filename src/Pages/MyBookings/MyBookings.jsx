import React, { use, useContext, useEffect } from 'react';
import { ToastContext } from '../Root/Root';
import { showSuccessToast } from '../../Utils/showToast';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import { getAppointment } from '../../Utils/addAppointment';
import BookingCard from '../../Components/BookingCard/BookingCard';
import { deleteAppointment } from '../../Utils/addAppointment';
import { showCancelAppointmentToast } from '../../Utils/showToast';
import CustomShapeBarChart from '../../Components/BarChart/BarChart.jsx';

const MyBookings = ({ doctorsPromise }) => {
    const doctors = use(doctorsPromise);
    console.log(doctors);
    const [toastShowing, setToastShowing] = useContext(ToastContext);
    const appointmentIDs = getAppointment();
    const appointments = doctors.filter(doctor => appointmentIDs.includes(doctor.reg_no));
    console.log(appointments);
    useEffect(() => {
        if (toastShowing) {
            showSuccessToast();
            console.log("Toast showing");
            setToastShowing(false);
        }
    }, [toastShowing, setToastShowing]);

    document.title = "DocTalk | My Bookings"
    return (
        <div className='max-w-7xl mx-auto mt-5 pb-20'>
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
            {appointmentIDs.length === 0 ?
                <NoBookingsYet /> :
                <Appointments appointments={appointments}></Appointments>}

        </div>
    );
};

function NoBookingsYet() {
    const navigate = useNavigate();
    return (
        <div className='content-center text-center min-h-screen'>
            <h1 className='text-3xl font-bold mb-3'>You have not booked any appointment yet.</h1>
            <p className='text-gray-700'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <button className='px-5 py-2 rounded-full bg-blue-600 text-white mt-5 w-fit cursor-pointer' onClick={() => { navigate('/') }}>Book an Appointment</button>
        </div>
    )
}

function Appointments({ appointments }) {

    function handleCancelAppointment(id) {
        let appointment = getAppointment();
        deleteAppointment(id, appointment);
        showCancelAppointmentToast();
    }

    return (
        <div>
            <div className='p-10 rounded-lg bg-white'>
                <CustomShapeBarChart appointments={appointments}></CustomShapeBarChart>
            </div>
            <div className='text-center mb-5 mt-10'>
                <h1 className='text-3xl font-bold mb-3'>My Today's Appointments</h1>
                <p className='text-gray-700'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            {
                appointments.map(appointment => <BookingCard key={appointment.reg_no} appointment={appointment} handleCancelAppointment={handleCancelAppointment}></BookingCard>)
            }
        </div>
    )
}

export default MyBookings;