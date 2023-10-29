import React from "react";
import NavigationHead from "./NavigationHead/NavigationHead";
import AuthContext from "./Context/AuthContext";
import { Outlet } from "react-router-dom";
import useAuthCtxHook from "./Hooks/AuthCtxHook";

const RootLayout = () => {
  const {
    isSignined,
    user,
    token,
    signinCallback,
    signoutCallback,
    updateUserProperty,
  } = useAuthCtxHook();

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isSignined,
        signin: signinCallback,
        signout: signoutCallback,
        updateUser: updateUserProperty,
      }}
    >
      <div className="root-layout">
        <NavigationHead />
        <main className="app-content-container" id="main-container">
          <Outlet />
        </main>
      </div>
    </AuthContext.Provider>
  );
};

export default RootLayout;
