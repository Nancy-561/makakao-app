import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const MainLayout = ({ isLoggedIn, count }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header isLoggedIn={isLoggedIn} count={count} />
      <div className="flex-grow flex flex-col overflow-y-auto">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
