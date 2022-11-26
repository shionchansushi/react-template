import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Other = () => (
  <div>
    <div style={{ padding: 8 }}>
      <Link to={'..'}>To Index</Link>
    </div>
    <Outlet />
  </div>
);
