import { style } from '@vanilla-extract/css';

export const notFound = {
  container: style({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    backgroundColor: 'var(--bg-secondary)',
    background: 'var(--bg-secondary)',
    
  }),

  numberContainer: style({
    position: 'relative',
    marginBottom: '16px',
  }),

  number: style({
    fontSize: '120px',
    fontWeight: '800',
    color: '#646cff',
    textAlign: 'center',
    lineHeight: '1',
    textShadow: '0 4px 8px rgba(100, 108, 255, 0.2)',
    background: 'linear-gradient(135deg, #646cff 0%, #8b5cf6 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }),

  title: style({
    fontSize: '32px',
    fontWeight: '700',
    color: 'var(--text-primary)',
    textAlign: 'center',
    margin: '0',
    letterSpacing: '-0.025em',
    
  }),

  description: style({
    fontSize: '16px',
    color: 'var(--text-secondary)',
    textAlign: 'center',
    maxWidth: '500px',
    lineHeight: '1.6',
    margin: '0',
    
  }),

  button: style({
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
  }),

  searchContainer: style({
    padding: '16px 24px',
    backgroundColor: 'var(--bg-card)',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    maxWidth: '400px',
    transition: 'border-color 0.3s ease',
  }),

  searchText: style({
    fontSize: '14px',
    color: 'var(--text-secondary)',
    margin: '0',
    textAlign: 'center',
    
  }),
};
