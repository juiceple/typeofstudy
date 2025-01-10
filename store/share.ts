// app/store/share.ts
import create from 'zustand';

interface ShareState {
  shared: boolean;
  setShared: (shared: boolean) => void;
}

export const useShareStore = create<ShareState>((set) => ({
  shared: false,
  setShared: (shared) => set({ shared }),
}));