import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../All-Home/Home/Home";
import Details from "../Details/Details";
import Login from "../pages/Login/Login/Login";
import Blogs from "../Blogs/Blogs";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/details",
                element: <Details></Details>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "blog",
                element: <Blogs></Blogs>
            }
        ]


    },
]);

export default router;