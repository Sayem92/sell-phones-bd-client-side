import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home/Home";
import CategoriesProducts from "../../components/Sheared/CategoriesProducts/CategoriesProducts";
import AddProduct from "../../components/Sheared/Dasboard/AddProduct/AddProduct";
import AllBuyers from "../../components/Sheared/Dasboard/AdminShow/AllBuyers";
import AllSellers from "../../components/Sheared/Dasboard/AdminShow/AllSellers";
import MyOrders from "../../components/Sheared/Dasboard/MyOrders/MyOrders";
import MyProducts from "../../components/Sheared/Dasboard/MyProducts/MyProducts";
import Payment from "../../components/Sheared/Dasboard/Payment/Payment";
import WelcomeDashboard from "../../components/Sheared/Dasboard/WelcomeDashboard/WelcomeDashboard";
import Login from "../../Form/Login";
import Register from "../../Form/Register";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
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
                path: '/products/:cateName',
                loader: ({ params }) => fetch(`https://assignment-12-server-eosin.vercel.app/products/${params.cateName}`),
                element: <PrivateRoutes>
                    <CategoriesProducts></CategoriesProducts></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]

    },
    {
        path: '/dashboard',
        element: <DashBoardLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
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
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://assignment-12-server-eosin.vercel.app/bookingData/${params.id}`)
            },
        ]

    }

])