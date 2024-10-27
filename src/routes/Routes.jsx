import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SingUp from "../pages/singUp/SingUp";
import Login from "../pages/singUp/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/singUp",
          element:<SingUp></SingUp>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;