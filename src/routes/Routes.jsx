import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";

const routes = createBrowserRouter([

    {
        path : '/',
        element : <Root></Root>,
        children : [

            {
                path:'/',
                element:<Home></Home>
            }


        ]

    }



])

export default routes;