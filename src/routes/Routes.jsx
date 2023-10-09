import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Rating from "../Pages/Rating/Rating";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceCardDetails from "../Pages/ServiceCardDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const routes = createBrowserRouter([

    {
        path : '/',
        element : <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children : [

            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch ('/data.json')
            },
            {
                path:'/serviceCard/:id',
               loader: () => fetch('../data.json'),
                element:<PrivateRoute><ServiceCardDetails></ServiceCardDetails></PrivateRoute>

            },
            {
                path:'/about',
                element:<PrivateRoute><About></About></PrivateRoute>
            },
            {
                path:'/rating',
                loader: () => fetch ('/data.json'),
                element:<PrivateRoute><Rating></Rating></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }



        ]

    }



])

export default routes;