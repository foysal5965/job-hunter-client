import { createBrowserRouter } from "react-router-dom";
import AllJobs from "../components/AllJobs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PrivetRoute from "../components/ProvetRoute/PrivetRoute";
import Registration from "../components/Registration/Registration";
import Main from "../layout/Main";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(' https://job-hunter-server.vercel.app/jobs-categories')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch('https://job-hunter-server.vercel.app/jobs-categories')
            },
            {
                path:'/alljobs/:id',
                element:<AllJobs></AllJobs>,
                loader:({params})=>fetch(`https://job-hunter-server.vercel.app/alljobs/${params.id}`)
            },

            
        ]
    }
])