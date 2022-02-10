import React, { Suspense, useEffect } from "react";
import { render } from "react-dom";
import "./main.css";
import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";
import Layout from "pages/layout/index";
import Loading from "components/loading";
import { OutRouter } from "@/router";
const App = () => {
  useEffect(() => {
    localStorage.setItem("token", "111");
  });
  return (
    <BrowserRouter basename="/">
      <Routes>
        {OutRouter.map(({ path, key, Component }) => (
          <Route
            element={(
              <Suspense fallback={<Loading />}>
                <Component />
              </Suspense>
            )}
            path={path}
            key={key}
          />
        ))}
        {localStorage.getItem("token") ? (
          <Route path="/" element={<Layout />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
