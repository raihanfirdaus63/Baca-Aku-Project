import { createBrowserRouter, redirect } from "react-router-dom"
import LandingPageComponent from "../components/LandingPageComponent";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import KarakterkuPage from "../views/KarakterkuPage";
import ComingSoonPage from "../views/ComingSoonPage";

const router = createBrowserRouter([
    {
        element: <LandingPageComponent/>,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: () => {
                    return localStorage.access_token ? true : redirect('/login')
                }
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/register",
                element: <RegisterPage/>
            },
            {
                path: "/karakterku",
                element: <KarakterkuPage/>,
                loader: () => {
                    return localStorage.access_token ? true : redirect('/login')
                }
            },
            {
                path: "/comingsoon",
                element: <ComingSoonPage/>,
                loader: () => {
                    return localStorage.access_token ? true : redirect('/login')
                }
            },
        ]
    }
])

export default router