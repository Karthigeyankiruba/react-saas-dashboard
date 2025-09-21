import { style } from "@vanilla-extract/css";

export const sidebar = {
  container: style({
    color: 'var(--text-primary) !important',

    transition: 'width 0.3s ease, min-width 0.3s ease, opacity 0.3s ease',
  }),

  nav: style({
    borderRight: '1px solid var(--border-color) !important',
    // width: '220px',
    transition: 'width 0.3s ease, min-width 0.3s ease, opacity 0.3s ease',
  }),

  navItem: style({
    color: 'var(--text-primary) !important',
    transition: 'color 0.3s ease',
    ':hover': {
      backgroundColor: 'var(--bg-card)',
    },
  }),

  navItemActive: style({
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-primary) !important',
    borderRight: '3px solid #646cff',
  }),

  groupLabel: style({
    color: 'var(--text-secondary) !important',
    transition: 'color 0.3s ease',
  }),

  groupTrigger: style({
    color: 'var(--text-primary) !important',
    transition: 'color 0.3s ease, background-color 0.3s ease',
    ':hover': {
      backgroundColor: 'var(--bg-card)',
    },
  }),
};

export const sidebarGroupTriggerStyleContext = style({
  // marginLeft: "-14px",
  color: 'var(--text-primary) !important',
  transition: 'color 0.3s ease',
});