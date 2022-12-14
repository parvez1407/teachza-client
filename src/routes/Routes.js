import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import Home from "../components/Home/Home";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";
import Main from "../layout/Main/Main";
import CourseDetails from "../components/CourseDetails/CourseDetails"
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CheckOut from "../components/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FAQ from "../components/FAQ/FAQ";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://teachza-server-parvez1407.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://teachza-server-parvez1407.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://teachza-server-parvez1407.vercel.app/courses/${params.id}`)
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://teachza-server-parvez1407.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
]);

