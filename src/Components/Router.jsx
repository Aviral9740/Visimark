import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import App from "../App";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/login", element: <Login/>},
    {path: "/signup", element: <Signup/>},
])