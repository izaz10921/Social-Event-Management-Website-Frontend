import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Rating from "../Pages/Rating/Rating";


const routes = createBrowserRouter([

    {
        path : '/',
        element : <Root></Root>,
        children : [

            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch ('data.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/rating',
                element:<Rating></Rating>
            },


        ]

    }



])

export default routes;