import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';

const AppRoutes = ({ showContact, setShowContact }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home showContact={showContact} setShowContact={setShowContact} />}
      />
    </Routes>
  );
};

export default AppRoutes;

