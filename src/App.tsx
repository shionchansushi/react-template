import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import './App.css';
import Index from '@routes/index';
import { SomeContent } from '@routes/index/SomContent';
import Other from '@routes/other';
import { OtherContent } from '@routes/other/OtherContent';

function App() {
  return (
    <div className={'App'}>
      <Outlet />
    </div>
  );
}

export function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path={'/'} element={<Index />}>
            <Route index element={<SomeContent />} />
          </Route>
          <Route path={'other'} element={<Other />}>
            <Route index element={<OtherContent />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
