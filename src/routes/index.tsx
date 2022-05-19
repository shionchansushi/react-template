import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function () {
  return (
    <div>
      <div style={{ padding: 8 }}>
        <Link to={'other'}>To Other</Link>
      </div>
      <Outlet />
    </div>
  );
}
