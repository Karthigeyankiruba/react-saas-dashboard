import { create } from 'zustand';

interface NotificationState {
  isOpen: boolean;
  toggleNotificationSidebar: () => void;
  closeNotificationSidebar: () => void;
  openNotificationSidebar: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  isOpen: false,
  toggleNotificationSidebar: () => set((state) => ({ 
    isOpen: !state.isOpen 
  })),
  closeNotificationSidebar: () => set({ isOpen: false }),
  openNotificationSidebar: () => set({ isOpen: true }),
}));
