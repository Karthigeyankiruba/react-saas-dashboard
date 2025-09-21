import { createVar, style } from '@vanilla-extract/css';

const iconColor = style({
  backgroundColor: createVar(),
});

export const customNotificationSidebar = {
  sidebar: style({
    width: '300px',
    height: '100vh',
    backgroundColor: 'var(--bg-card)',
    borderLeft: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, width 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    transform: 'translateX(100%)',
    position: 'relative',
    selectors: {
      '&[data-open="true"]': {
        transform: 'translateX(0)',
      },
      '&[data-open="false"]': {
        transform: 'translateX(100%)',
        width: '0px',
        overflow: 'hidden',
      },
    },
  }),

  notificationIcon: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    borderRadius: '8px',
    backgroundColor: iconColor,
    border: 'none',
    flexShrink: 0,
  }),
};
