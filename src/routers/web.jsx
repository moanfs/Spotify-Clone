import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Playlists from "../pages/Playlists";
import Categories from "../pages/Categories";
import Albums from "../pages/Albums";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/playlist/:id?",
        element: <Playlists/>,
    },
    {
        path: "/categories/:id?",
        element: <Categories/>,
    },
    {
        path: "/albums/:id?",
        element: <Albums/>,
    },
]);
export default router