import { create } from "zustand";

const useStore = create((set) => ({
  isDark: false,
  setIsDark: () => set((state) => ({ ...state, isDark: !state.isDark })),
}));

export default useStore;
