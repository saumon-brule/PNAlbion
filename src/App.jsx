import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./app/login/Login";
import Members from "./app/members/Members";
import Account from "./app/account/Account";
import Guild from "./app/guild/Guild";
import Root from "./app/Root";

import './App.css'
export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Navigate to="/login" />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "account",
                    element: <Account />,
                },
                {
                    path: "members",
                    element: <Members />,
                },
                {
                    path: "guild",
                    element: <Guild />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}