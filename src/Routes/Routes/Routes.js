import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home/Home";
import CategoriesProducts from "../../components/Sheared/CategoriesProducts/CategoriesProducts";
import AddProduct from "../../components/Sheared/Dasboard/AddProduct/AddProduct";
import MyOrders from "../../components/Sheared/Dasboard/MyOrders/MyOrders";
import MyProducts from "../../components/Sheared/Dasboard/MyProducts/MyProducts";
import WelcomeDashboard from "../../components/Sheared/Dasboard/WelcomeDashboard/WelcomeDashboard";
import Login from "../../Form/Login";
import Register from "../../Form/Register";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/categories/:id',
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`),
                element: <CategoriesProducts></CategoriesProducts>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]

    },
    {
        path: '/dashboard',
        element:  <DashBoardLayout />,
        children:[
            {
                path: '/dashboard',
                element: <WelcomeDashboard></WelcomeDashboard>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
        ]
        
    }

])