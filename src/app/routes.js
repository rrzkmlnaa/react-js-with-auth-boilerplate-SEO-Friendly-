import { lazy } from "react";

const Routes = [
  // DEFAULT PAGES
  {
    path: "/",
    component: lazy(() => import("pages/home")),
    name: "Home",
    layout: true,
    authenticated: false,
  },
  /*
   ---------------------------------------------
    YOUR URL PAGES
   ---------------------------------------------
  */
  {
    path: "/login",
    component: lazy(() => import("pages/auth/Login")),
    name: "Login",
    layout: false,
    authenticated: false,
  },
  /*
    ---------------------------------------------
    PLEASE KEEP PUT IT AT THE BOTTOM
    ---------------------------------------------
  */
  {
    path: "*",
    component: lazy(() => import("pages/404")),
    name: "Page not found",
    layout: true,
    authenticated: false,
  },
];

export default Routes;
