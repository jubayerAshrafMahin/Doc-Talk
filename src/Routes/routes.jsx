//routes.jsx
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Doctor from "../Pages/Doctor/Doctor";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import MyBookings from "../Pages/MyBookings/MyBookings";

const doctorsPromise = fetch('/DoctorsData.json').then(res => res.json());


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                element: <Home doctorsPromise={doctorsPromise}></Home>
            },
            {
                path: '/doctor/:reg',
                element: <Doctor doctorsPromise={doctorsPromise}></Doctor>
            },
            {
                path: '/my-bookings',
                element: <MyBookings doctorsPromise={doctorsPromise}></MyBookings>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])