import React, { Suspense } from "react";
import AllRoutes from "./routes";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

// @custome component
import MainBackdrop from "components/backdrop";

// configs
import appConfig from "configs/appConfig";
import { AuthProvider } from "provider/authProvider";

function App() {
  const { APP_NAME } = appConfig;

  return (
    <Routes>
      {AllRoutes.map((val, key) => {
        let Components = val.component;

        if (val.layout === true) {
          return (
            <Route
              key={key}
              path={val.path}
              element={
                <>
                  <Helmet>
                    <title>
                      {val.name} - {APP_NAME}
                    </title>
                  </Helmet>
                  <Suspense fallback={<MainBackdrop open />}>
                    {val.authenticated === true ? (
                      <AuthProvider>
                        <Components />
                      </AuthProvider>
                    ) : (
                      <Components />
                    )}
                  </Suspense>
                </>
              }
            />
          );
        } else {
          return (
            <Route
              key={key}
              path={val.path}
              element={
                <>
                  <Helmet>
                    <title>
                      {val.name} - {APP_NAME}
                    </title>
                  </Helmet>
                  <Suspense fallback={<MainBackdrop open />}>
                    {val.authenticated === true ? (
                      <AuthProvider>
                        <Components />
                      </AuthProvider>
                    ) : (
                      <Components />
                    )}
                  </Suspense>
                </>
              }
            />
          );
        }
      })}
    </Routes>
  );
}

export default App;
