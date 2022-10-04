import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import logoUrl from './logo.svg';
import type { PageContextServer } from './types';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { CacheProvider } from '@emotion/react';

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

const key = 'custom';
const cache = createCache({ key });
const { extractCritical } = createEmotionServer(cache);

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </CacheProvider>
  );
  console.log('page', pageHtml);
  let { html, css, ids } = extractCritical(pageHtml);

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc =
    (documentProps && documentProps.description) ||
    'App using Vite + vite-plugin-ssr';
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ko-kr">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <style data-emotion="${key} ${ids.join(' ')}">${css}</style>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(html)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
