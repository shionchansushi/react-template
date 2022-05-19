import React from 'react';

import { SomeType } from '@libs/types/SomeType';

export const SomeDataCard: React.FC<{ some: SomeType | undefined }> = ({ some }) => {
  if (!some) {
    return (
      <div>
        <h3>No Data!</h3>
      </div>
    );
  }
  return (
    <div>
      <h2>{some.getId()}</h2>
      <p>{some.getName()}</p>
      <p>{some.getDescription()}</p>
    </div>
  );
};
