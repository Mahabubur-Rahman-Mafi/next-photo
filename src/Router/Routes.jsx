import { createBrowserRouter } from "react-router-dom";
import Body from "../layout/Body";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/log/Login";
import Regestration from "../Pages/log/Regestration";
import AddService from "../Pages/Personal/AddService";
import MyReview from "../Pages/Personal/MyReview";
import Profile from "../Pages/Personal/Profile";
import Update from "../Pages/Personal/Update";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://nexl-photography-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://nexl-photography-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "review",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "update",
        element: <Update></Update>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
    errorElement: <Error></Error>,
  },
  {
    path: "registration",
    element: <Regestration></Regestration>,
    errorElement: <Error></Error>,
  },
]);
