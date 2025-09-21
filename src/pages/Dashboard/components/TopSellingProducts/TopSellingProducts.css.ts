import { style } from '@vanilla-extract/css';

export const topSellingProducts = {
  container: style({
    backgroundColor: 'var(--bg-card)',
    borderRadius: '8px',
    padding: '24px',
    border: 'none',
    
  }),

  table: style({
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'transparent',
    border: 'none',
    tableLayout: 'fixed',
  }),

  tableHeader: style({
    borderBottom: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-primary)',
  }),

  headerCell: style({
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
  }),


  nameHeader: style({
    textAlign: 'left',
    padding: '16px 12px',
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '500',
    backgroundColor: 'transparent',
  }),

  numberHeader: style({
    textAlign: 'right',
    padding: '16px 12px',
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '500',
  }),

  dataRow: style({
    border: 'none',
    '& td': {
      padding: '16px 12px !important',
      verticalAlign: 'top !important',
      lineHeight: '1.5 !important',
    },
    '& td:nth-child(1)': { width: '40%' },
    '& td:nth-child(2)': { width: '20%' },
    '& td:nth-child(3)': { width: '20%' },
    '& td:nth-child(4)': { width: '20%' },
  }),

  nameCell: style({
    textAlign: 'left',
    padding: '16px 12px !important',
    color: '#111827',
    lineHeight: '1.5 !important',
  }),

  numberCell: style({
    textAlign: 'right',
    padding: '16px 12px !important',
    color: '#111827',
    lineHeight: '1.5 !important',
  }),
};
