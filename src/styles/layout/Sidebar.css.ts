import { style } from "@vanilla-extract/css";

export const sidebar = {
  container: style({
    // backgroundColor: 'var(--bg-secondary) !important',
    // borderRight: '1px solid var(--border-color) !important',
    color: 'var(--text-primary) !important',
    // transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
    padding: '12px',
  }),

  nav: style({
    // backgroundColor: 'var(--bg-secondary) !important',
    // transition: 'background-color 0.3s ease',
      borderRight: '1px solid var(--border-color) !important',
    width: '220px',
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
  marginLeft: "-14px",
  color: 'var(--text-primary) !important',
  transition: 'color 0.3s ease',
});