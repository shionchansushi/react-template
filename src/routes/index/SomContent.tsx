import React, { useEffect, useState } from 'react';

import { SomeDataCard } from '@components/data-card/SomeDataCard';
import { GetSomeById, GetSomeDataAll } from '@libs/api/SomeApi';
import { SomeType } from '@libs/types/SomeType';

export const SomeContent: React.FC = () => {
  const [someData, setSomeData] = useState<SomeType[]>([]);
  const [someId, setSomeId] = useState<number | null>(null);

  useEffect(() => {
    setSomeData(GetSomeDataAll);
  }, []);

  return (
    <div>
      <main>
        <div>
          <h1>All some data</h1>
          {someData && someData.map((s) => <SomeDataCard some={s} />)}
        </div>
        <div>
          <h1>Some data by Id</h1>
          <input
            type={'number'}
            onChange={(event) => setSomeId(parseInt(event.target.value, 10))}
          />
          {<SomeDataCard some={someId ? GetSomeById(someId) : undefined} />}
        </div>
      </main>
    </div>
  );
};
