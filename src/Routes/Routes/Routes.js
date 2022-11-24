import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import BookedForm from "../../components/Sheared/BookedForm/BookedForm";
import CategoriesProducts from "../../components/Sheared/CategoriesProducts/CategoriesProducts";
import Login from "../../Form/Login";
import Register from "../../Form/Register";
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
                path: '/bookedForm',
                element: <BookedForm></BookedForm>
            },
        ]

    }
])