import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostBySlugThunk, likePostThunk } from './SinglePostThunk'

const initialState = {
  isLoading: false,
  post: null,
}

export const getPostBySlug = createAsyncThunk(
  'singlePost/getPostBySlug',
  async (payload, thunkAPI) => {
    return getPostBySlugThunk(`post/slug/${payload}`, thunkAPI)
  }
)

export const likePost = createAsyncThunk(
  'singlePost/likePost',
  async (payload, thunkAPI) => {
    return likePostThunk(
      `post/actions/like/${payload.postId}`,
      payload.likes,
      thunkAPI
    )
  }
)

const singlePostSlice = createSlice({
  name: 'singlePost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostBySlug.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPostBySlug.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.post = payload.post
      })
      .addCase(getPostBySlug.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
      .addCase(likePost.pending, (state) => {})
      .addCase(likePost.fulfilled, (state, { payload }) => {
        state.post = payload.post
      })
      .addCase(likePost.rejected, (state, { payload }) => {
        console.log(payload)
      })
  },
})

export default singlePostSlice.reducer
