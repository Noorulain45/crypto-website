import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  user: { name: string; email: string; avatar: string; role: string } | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', action.payload.token);
      }
    },
    setUser(state, action: PayloadAction<AuthState['user']>) {
      state.user = action.payload;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    },
    rehydrate(state) {
      if (typeof window !== 'undefined') {
        state.token = localStorage.getItem('token');
      }
    },
  },
});

export const { setCredentials, setUser, logout, rehydrate } = authSlice.actions;
export default authSlice.reducer;
