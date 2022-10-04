import React from 'react';
import logo from './logo.svg';
import { PageContextProvider } from './usePageContext';
import type { PageContextCommon } from './types';
import 'pretendard/dist/web/static/pretendard.css';
import './PageShell.css';
import { Link } from './Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { linkContainer } from '../styles/Common';

export { PageShell };

// MUI Custom Theme
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [
        'Pretendard',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ].join(','),
    },
  },
});

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContextCommon;
}) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <PageContextProvider pageContext={pageContext}>
          <header>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar
                position="static"
                color="default"
                sx={{ background: '#ffffff', padding: '0 6vw' }}
              >
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, fontWeight: 'bold', color: '#23C6B9' }}
                    href="/"
                  >
                    DMNC
                  </IconButton>
                  <ul className={linkContainer}>
                    <li>소개</li>
                    <li>요금제 안내</li>
                    <li>고객센터</li>
                    <li>
                      <Link href="/test">에디터 테스트</Link>
                    </li>
                  </ul>
                  {/* <ul
                    className={`${styles['link-container']} ${styles['align-right']}`}
                  >
                    <Login user={user}></Login>
                    <li>
                      <Link href="/auth/signup">회원가입</Link>
                    </li>
                    <li>
                      <Button
                        sx={[
                          {
                            background: '#2334C6',
                            color: '#fff',
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            padding: '4px 20px',
                          },
                          (theme) => ({ '&:hover': { background: '#2334C6' } }),
                        ]}
                      >
                        <Typography>바로 시작하기</Typography>
                      </Button>
                    </li>
                  </ul> */}
                </Toolbar>
              </AppBar>
            </Box>
          </header>
          {/* <Layout>
            <Sidebar>
              <Logo />
              <Link className="navitem" href="/">
                Home
              </Link>
              <Link className="navitem" href="/about">
                About
              </Link>
              <Link className="navitem" href="/test">
                Test
              </Link>
            </Sidebar>
            <Content>{children}</Content>
          </Layout> */}
        </PageContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em',
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
