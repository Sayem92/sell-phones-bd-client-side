import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]

    }
])