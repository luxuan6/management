import React from "react";

// import Loadable from "react-loadable";

// function Loading() {
//   return <div> loadable... </div>;
// }

// const Home = Loadable({
//   loader: () => import("../viwes/home/home"),
//   loading: Loading
// });

import Home from "../views/home/home";
import Login from "../views/login/login";
// import Particulars from "../viwes/particulars";

const router = [{
        path: "/home",
        component: Home
    },
    // {
    //     path: "/list",
    //     component: List,
    //     children: [{
    //         path: "/home/item",
    //         component: Item
    //     }]
    // },
    // {
    //     path: "/my",
    //     component: My
    // },
    // {
    //     path: "/particulars/:id",
    //     component: Particulars
    // },
    {
        path:'/login',
        component:Login
    },
    {
        path: "/",
        redirect: "/home"
    }
];

export default router;