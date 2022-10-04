import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

export { render };
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const cache = createCache({
    key: 'custom',
  });
  hydrateRoot(
    document.getElementById('page-view')!,
    <CacheProvider value={cache}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </CacheProvider>
  );
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
