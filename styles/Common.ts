import { css } from '@emotion/css';

export const linkContainer = css({
  flex: 1,
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  '& li': {
    fontWeight: 600,
    cursor: 'pointer',
    '&:not(:first-child)': { marginLeft: '2rem' },
    '&:hover': { color: 'purple' },
  },
});
