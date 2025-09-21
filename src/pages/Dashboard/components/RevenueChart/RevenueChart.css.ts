import { style } from '@vanilla-extract/css';

export const revenueChart = {
  container: style({
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '24px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  }),

  chartContainer: style({
    width: '100%',
    height: '200px',
  }),

  tooltip: style({
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    padding: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    minWidth: '140px',
    maxWidth: '220px',
    whiteSpace: 'nowrap',
    color: 'var(--text-primary)',
  }),
};

