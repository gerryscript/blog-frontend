import {RouteObject, Navigate} from 'react-router-dom'
import IndexPage from "../pages/IndexPage";
import AboutPage from "../pages/AboutPage";

const routes: RouteObject[] = [
    {
        path: "/index",
        element: <IndexPage/>
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/",
        element: <Navigate to="/index" />
    }
];

export default routes;