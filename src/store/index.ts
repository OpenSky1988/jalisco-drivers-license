import { configureStore } from '@reduxjs/toolkit';
import questions from './slices/questions';

export const store = configureStore({
  reducer: {
    questions,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
