import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { message: null },
  reducers: {
    showNotification: (state, action) => { state.message = action.payload; },
    clearNotification: (state) => { state.message = null; },
  }
});

export const { showNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer; 