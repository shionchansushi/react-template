import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import './App.css';
import { Index } from '@routes/index';
import { SomeContent } from '@routes/index/SomContent';
import { Other } from '@routes/other';
import { OtherContent } from '@routes/other/OtherContent';

const App = () => (
  <div className={'App'}>
    <Outlet />
  </div>
);

export const AppWrapper = () => (
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
