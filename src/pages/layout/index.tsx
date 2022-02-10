import {
  Routes, Route, Navigate, Outlet
} from "react-router-dom";
import { InRouter } from "@/router";
import Menu from "./comps/menu";
import style from "./index.less";
export default () => {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <Routes>
          {InRouter.map(({ path, key, Component }) => (
            <Route element={<Component />} path={path} key={key} />
          ))}
          {/* <Route path="/" element={<Navigate to="/asset" />} /> */}
        </Routes>
        <Outlet />
      </div>
      <div className={style.menu}>
        <Menu />
      </div>
    </div>
  );
};
