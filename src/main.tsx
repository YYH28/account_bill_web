import React, { Suspense } from "react";
import { render } from "react-dom";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "pages/layout/index";
import { OutRouter } from "@/router";
const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {OutRouter.map(item => (
          <Route
            element={(
              <Suspense fallback={<>...</>}>
                <item.element />
              </Suspense>
            )}
            path={item.path}
            key={item.key}
          />
        ))}
        <Layout />
        {/* <Route
        path="/"
        render={({ location }) => {
          let token = localStorage.getItem("token");
          return token ? <Layout /> : <Redirect to="/login" />;
        }}
      /> */}
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
