import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Components/Header';

export const MainLayout = ({ isLoggedIn, count }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header isLoggedIn={isLoggedIn} count={count}/>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}