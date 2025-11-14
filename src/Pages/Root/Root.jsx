//Root.jsx
import React, { createContext, Suspense, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { DNA } from 'react-loader-spinner';

export const ToastContext = createContext(false);

const Root = () => {

    const [toastShowing, setToastShowing] = useState(false);

    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-gray-100 px-5'>
                <Suspense fallback={
                <div className="text-center min-h-screen flex flex-col items-center justify-center gap-1">
                <DNA
                visible={true}
                height="70"
                width="70"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />
                <p className="text-sm">Loading...</p>
                </div>}>
                    <ToastContext.Provider value={[toastShowing, setToastShowing]}>
                        <Outlet ></Outlet>
                    </ToastContext.Provider>
                </Suspense>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;