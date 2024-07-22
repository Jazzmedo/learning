import React from 'react';
import Movie from "./components/Item/Movie"
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import People from './components/people/People';


const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/Home",
                element: <Home />
            },
            {
                path: "/:type/:id",
                element: <Movie />
            },
            {
                path: "",
                element: <Home />
            },
            {
                path: "/person/:pid",
                element: <People />
            }
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);