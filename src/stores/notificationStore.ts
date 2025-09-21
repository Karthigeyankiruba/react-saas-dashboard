import { create } from 'zustand';

interface NotificationState {
  isNotificationSidebarOpen: boolean;
  toggleNotificationSidebar: () => void;
  closeNotificationSidebar: () => void;
  openNotificationSidebar: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  isNotificationSidebarOpen: false,
  toggleNotificationSidebar: () => set((state) => ({ 
    isNotificationSidebarOpen: !state.isNotificationSidebarOpen 
  })),
  closeNotificationSidebar: () => set({ isNotificationSidebarOpen: false }),
  openNotificationSidebar: () => set({ isNotificationSidebarOpen: true }),
}));
