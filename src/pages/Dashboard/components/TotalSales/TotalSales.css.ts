import { style } from '@vanilla-extract/css';

export const totalSales = {
  container: style({
    backgroundColor: 'var(--bg-card)',
    borderRadius: '8px',
    padding: '24px',
    border: 'none',
    width: '100%',
    
  }),

  chartContainer: style({
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  }),

  centerLabel: style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#374151',
    borderRadius: '8px',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  legend: style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }),

  legendDot: style({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    flexShrink: 0,
  }),
};
