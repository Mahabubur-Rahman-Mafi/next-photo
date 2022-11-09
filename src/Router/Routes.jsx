
import { createBrowserRouter } from "react-router-dom";
import Body from "../layout/Body";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Register/Login";
import Regestration from "../Pages/Login/Register/Regestration";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Body></Body>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    },
    {
        path: 'login',
        element:<Login></Login>
    },
    {
        path: 'registration',
        element:<Regestration></Regestration>
    }
])