import { createSlice } from '@reduxjs/toolkit';

const getMode = (): boolean => {
  const savedTheme = localStorage.getItem('theme');
  const root = document.documentElement;

  if (savedTheme === 'dark') {
    root.classList.add('dark');
    return true;
  }

  root.classList.remove('dark');
  return false;
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
    toggleDarkMode: (state) => {
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
    setDarkMode: (state, action: { payload: boolean }) => {
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

export const { toggleDarkMode, setDarkMode } = modeSlice.actions;
export default modeSlice.reducer;
