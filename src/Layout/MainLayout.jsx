import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const MainLayout = ({ isLoggedIn, count }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const container = document.getElementById("scrollable-container");
    container.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header isLoggedIn={isLoggedIn} count={count} />
      <div
        id="scrollable-container"
        className="flex-grow flex flex-col overflow-y-auto"
      >
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
