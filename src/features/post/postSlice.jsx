import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostThunk } from './postThunk'

const initialState = {
  isLoading: false,
  posts: [],
}

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (_, thunkAPI) => {
    return getPostThunk('/post', thunkAPI)
  }
)

const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.posts = payload.posts
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export default postSlice.reducer
