import { createSlice } from '@reduxjs/toolkit';

const getMode = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') return true;
  if (savedTheme === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: light)').matches;
};

interface ModeInterface {
  isDark: boolean;
}

const initialState: ModeInterface = {
  isDark: getMode(),
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleDarkMode: (state: ModeInterface) => {
      state.isDark = !state.isDark;

      const root = document.documentElement;
      if (state.isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    },
    setDarkMode: (state: ModeInterface , action: { payload: boolean }) => {
      state.isDark = action.payload;

      const root = document.documentElement;
      if (state.isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    },
  },
});

export const { toggleDarkMode, setDarkMode } = modeSlice.actions
export default modeSlice.reducer;