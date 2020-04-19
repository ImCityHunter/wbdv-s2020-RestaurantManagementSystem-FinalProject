import LoginRegister from "./user/login.register";
import Home from "./home/home";
import Profile from "./user/profile";
import MainContent from "./home/home.content";

const routes = [
    {
        path: "/customer",
        component: Home,
        routes: [
            {
                path: "/customer/",
                component: MainContent
            }, {
                path: "/customer/profile",
                component: Profile
            }
        ]
    },
    {
        path: "/login",
        component: LoginRegister,
        exact: true
    },
    {
        path: "/register",
        component: LoginRegister,
        exact: true
    },
]

export default routes
