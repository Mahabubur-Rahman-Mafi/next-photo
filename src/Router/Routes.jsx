
import { createBrowserRouter } from "react-router-dom";
import Body from "../layout/Body";
import Home from "../Pages/Home/Home";

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
        path: '/login',
        element
    }
])