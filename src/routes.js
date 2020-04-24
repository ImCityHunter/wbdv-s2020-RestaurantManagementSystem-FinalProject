import LoginRegister from "./customer/user/login.register";
import Home from "./customer/home/home";
import Profile from "./customer/user/profile";
import MainContent from "./customer/home/home.content";
import DashBoard from "./restaurant/dashboard/DashBoard";
import MenuEditor from "./restaurant/menuEditor/MenuEditor";
import OrderViewer from "./restaurant/orderViewer/OrderViewer";
import InfoEditor from "./restaurant/infoEditor/InfoEditor";

// <Route path="/:rid/dashBoard" render={() => <DashBoard />} />
// <Route path="/:rid/menuEditor" render={() => <MenuEditor />} />
// <Route path="/:rid/orderViewer" render={() => <OrderViewer />} />
// <Route path="/:rid/infoEditor" render={() => <InfoEditor />} />

const routes = [
    {
        path:'/',
        component: Home,
        routes: [
            {
                path: "/",
                component: MainContent
            },
            {
                path: "/customer/profile",
                component: Profile
            }
        ]
    }, // added this route
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
