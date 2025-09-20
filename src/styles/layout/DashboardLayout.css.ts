import { style } from '@vanilla-extract/css';

export const dashboardLayout = {
  container: style({
    display: 'flex',
    height: '100vh',
    width: '100vw',
  }),
  mainArea: style({
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  }),
};
