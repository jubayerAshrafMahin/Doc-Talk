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
            <div className='bg-gray-100 min-h-screen'>
                <Navbar></Navbar>
                <Suspense fallback={
                <div className="text-center flex flex-col items-center justify-center gap-1 min-h-screen">
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
                        <div className='px-5'>
                            <Outlet ></Outlet>
                        </div>
                    </ToastContext.Provider>
                </Suspense>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;