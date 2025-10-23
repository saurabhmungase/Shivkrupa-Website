import { createHashRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/homePage/HomePage";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import InfrastructureMachinery from "../components/InfrastructureMachinery";
import Services from "../components/Services/Services";
 

export let router = createHashRouter([
    {
        path: "/",
        element: <LandingPage />,
        children:[
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/infrastructure-machinery",
                element: <InfrastructureMachinery></InfrastructureMachinery>
            },
            {
                path: "/services",
                element: <Services></Services>
            }
        ]
    }
]);