import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  // Replace with your real API
  return [
    { id: 1, title: 'First Post', content: 'Hello world!' },
    { id: 2, title: 'Second Post', content: 'Redux is awesome!' },
  ];
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], loading: false, error: null },
  reducers: {
    addPost: (state, action) => { state.items.push(action.payload); },
    removePost: (state, action) => {
      state.items = state.items.filter(post => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => { state.loading = true; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer; 