import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './features';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
