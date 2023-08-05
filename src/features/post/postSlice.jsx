import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getNewestPostThunk,
  getPostThunk,
  getTrendingPostsThunk,
  getUserInterestPostThunk,
} from './postThunk'

const initialState = {
  isLoading: false,
  posts: [],
  newestPosts: [],
  userInterestsPosts: [],
  trendingPosts: [],
}

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (_, thunkAPI) => {
    return getPostThunk('/post', thunkAPI)
  }
)

export const getNewestPosts = createAsyncThunk(
  'post/getNewestPosts',
  async (_, thunkAPI) => {
    return getNewestPostThunk('/post/latest', thunkAPI)
  }
)

export const getUserInterestPosts = createAsyncThunk(
  'post/getUserInterestPosts',
  async (_, thunkAPI) => {
    return getUserInterestPostThunk('/post/interests', thunkAPI)
  }
)

export const getTrendingPosts = createAsyncThunk(
  'post/getTrendingPosts',
  async (_, thunkAPI) => {
    return getTrendingPostsThunk('/post/trending', thunkAPI)
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
      .addCase(getNewestPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getNewestPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.newestPosts = payload.post
      })
      .addCase(getNewestPosts.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
      .addCase(getUserInterestPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserInterestPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.userInterestsPosts = payload.posts
      })
      .addCase(getUserInterestPosts.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
      .addCase(getTrendingPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTrendingPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.trendingPosts = payload.posts
      })
      .addCase(getTrendingPosts.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export default postSlice.reducer
