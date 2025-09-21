import { style } from '@vanilla-extract/css';

export const orderList = {
  container: style({
    padding: '24px',
    // backgroundColor: 'var(--bg-secondary)',
    minHeight: '100vh',
    
  }),

  table: style({
    backgroundColor: 'var(--bg-card)',
    borderRadius: '8px',
    // border: '1px solid var(--border-color)',
    overflow: 'hidden',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
     transition: 'border-color 0.3s ease',
  }),
};

export const badge = style({
opacity: 0.5,
}); 