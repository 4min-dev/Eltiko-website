import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/UI/pages/homePage/HomePage";
import CatalogPage from "./components/UI/pages/catalog/CatalogPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>,
        errorElement:<h1>No page found</h1>
    },
    {
        path:'/catalog',
        element:<CatalogPage/>
    }
])