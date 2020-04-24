import LoginRegister from "./customer/user/login.register";
import Home from "./customer/home/home";
import Profile from "./customer/user/profile";
import MainContent from "./customer/home/home.content";
import DashBoard from "./restaurant/dashboard/DashBoard";
import MenuEditor from "./restaurant/menuEditor/MenuEditor";
import OrderViewer from "./restaurant/orderViewer/OrderViewer";
import InfoEditor from "./restaurant/infoEditor/InfoEditor";
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
    }, // added this route, in order for 無登入帳好者使用
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
    {
        path: "/restaurant/:rid/dashBoard",
        component: DashBoard
    },
    {
        path: "/restaurant/:rid/menuEditor",
        component: MenuEditor
    },
    {
        path: "/restaurant/:rid/orderViewer",
        component: OrderViewer
    },
    {
        path: "/restaurant/:rid/infoEditor",
        component: InfoEditor
    },
]

export default routes
