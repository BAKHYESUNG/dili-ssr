import React from 'react';
import type { PageProps } from '../../../renderer/types';
export { Page };

function Page(pageProps: PageProps) {
  const { data } = pageProps;

  return (
    <>
      <div>{data.name}</div>
      <div>{data.age}</div>
      <div>{data.count}</div>
    </>
  );
}
