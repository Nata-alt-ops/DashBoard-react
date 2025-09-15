import React, { useEffect, useState } from 'react';
import {Navigate, Outlet, Route, Routes, useSearchParams} from 'react-router-dom';
import {Layout} from "../components/layout";
import { Main } from "../pages/main";




export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Layout>
              <Outlet />
            </Layout>
          
        }
      >
        <Route path="main" element={<Main />} />
        <Route index element={<Navigate to="/main" />} />
        

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
