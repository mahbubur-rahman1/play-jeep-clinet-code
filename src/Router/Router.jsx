import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../All-Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Blogs from "../Blogs/Blogs";
import AllToy from "../AllToy/AllToy";




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
                path: "alltoys",
                element: <AllToy></AllToy>
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