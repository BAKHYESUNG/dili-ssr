import React from 'react';
import { Counter } from './Counter';

export { Page };

function Page() {
  return (
    <>
      <h1>안녕하세요</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
