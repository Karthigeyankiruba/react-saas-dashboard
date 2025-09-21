import { style } from '@vanilla-extract/css';

export const projectionsChart = {
  container: style({
    backgroundColor: 'var(--bg-card)',
    borderRadius: '20px',
    padding: '24px',
    border: "none",
  }),

  title: style({
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    margin: '0 0 20px 0',
  }),

  chartContainer: style({
    width: '100%',
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
  }),
};
