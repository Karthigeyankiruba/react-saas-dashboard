import { style } from '@vanilla-extract/css';

export const mainContent = {
  container: style({
    flexGrow: 1,
    padding: '24px',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
  }),
};
