import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
// import ProjectDetails from "../components/ProjectDetails";
import Order from "../pages/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret";
import Cart from "../pages/Dashboard/Cart";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,

        },
        {
          path: "menu",
          element: <Menu></Menu>,

      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    //   {
    //     path: "projects/:id",
    //     element: <ProjectDetails></ProjectDetails>,

    // }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);