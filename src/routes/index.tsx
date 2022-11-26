import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Index = () => (
  <div>
    <div style={{ padding: 8 }}>
      <Link to={'other'}>To Other</Link>
    </div>
    <Outlet />
  </div>
);
