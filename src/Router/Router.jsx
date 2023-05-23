import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../All-Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Blogs from "../Blogs/Blogs";
import AllToy from "../AllToy/AllToy";
import AddToy from "../AddToy/AddToy";
import MyToy from "../MyToy/MyToy";
import ViewDetails from "../All-Home/ViewDetails/ViewDetails";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
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
            },
            {
                path: "addtoy",
                element: <AddToy></AddToy>
            },
            {
                path: "mytoy",
                element: <MyToy></MyToy>
            },
            {
                path: "toydetails/:id",
                element: <ViewDetails></ViewDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]


    },
]);

export default router;