/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy } from "react";

interface RouterBody {
  path: string;
  key: string;
  Component?: any;
  children?: Array<RouterBody>;
}

export const OutRouter: Array<RouterBody> = [
  {
    path: "/login",
    key: "login",
    Component: lazy(() => import("pages/login")),
  },
];

export const InRouter: Array<RouterBody> = [
  {
    path: "/asset",
    key: "asset",
    Component: lazy(() => import("pages/asset")),
  },
  {
    path: "/report",
    key: "report",
    Component: lazy(() => import("pages/report")),
  },
  {
    path: "/bill",
    key: "bill",
    Component: lazy(() => import("pages/bill")),
  },
  {
    path: "/more",
    key: "more",
    Component: lazy(() => import("pages/more")),
  },
];
