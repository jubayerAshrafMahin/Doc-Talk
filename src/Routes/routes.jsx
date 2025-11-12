import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";

const doctorsPromise = fetch('DoctorsData.json').then(res=>res.json());


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                element: <Suspense fallback={<p className="text-center min-h-screen content-center">Loading...</p>}>
                    <Home doctorsPromise={doctorsPromise}></Home>
                </Suspense>
            }
        ]
    },
    {
        path: '*',
        element: <p className="min-h-screen content-center text-6xl font-bold text-center">Page Not Found</p>
    }
])