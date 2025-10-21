import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import HelpDesk from "./DashComp/HelpDesk";
import App from "../App";
import ALogin from "./ALogin";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/login", element: <Login/>},
    {path: "/alogin", element: <ALogin/>},
    {path: "/signup", element: <Signup/>},
    {path: "/helpdesk", element: <HelpDesk/>}
])