import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
// import ProjectDetails from "../components/ProjectDetails";
import Order from "../pages/Order";

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
      }
    //   {
    //     path: "projects/:id",
    //     element: <ProjectDetails></ProjectDetails>,

    // }
      ]
    },
  ]);