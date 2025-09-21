import { style } from '@vanilla-extract/css';

export const dashboardLayout = {
  container: style({
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
  }),
  mainArea: style({
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    minWidth: 0, // Allows flex item to shrink below content size
  }),
};
