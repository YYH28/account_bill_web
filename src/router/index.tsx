import { lazy } from "react";
interface Router {
  path: string;
  key: string;
  element: unknown;
  children?: Array<Router>;
}

export const OutRouter: Array<Router> = [
  {
    path: "/login",
    key: "login",
    element: lazy(() => import("pages/home")),
  },
  {
    path: "/",
    key: "home",
    element: lazy(() => import("pages/home")),
  },
];

export const InRouter: Array<Router> = [
  {
    path: "/home",
    key: "home",
    element: lazy(() => import("pages/home")),
  },
];
