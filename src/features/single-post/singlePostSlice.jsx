import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createCommentThunk,
  createPostThunk,
  getPostBySlugThunk,
  getPostCommentsThunk,
  likeCommentThunk,
  likePostThunk,
} from './SinglePostThunk'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  post: null,
  commentTabIsOpen: false,
  tab: 'comment',
  comments: [],
  commentsIsLoading: false,
  renderValue: false,
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

export const getPostComments = createAsyncThunk(
  'singlePost/getPostComments',
  async (payload, thunkAPI) => {
    return getPostCommentsThunk(`comments/${payload}`, thunkAPI)
  }
)

export const likeComment = createAsyncThunk(
  'singlePost/likeComment',
  async (payload, thunkAPI) => {
    return likeCommentThunk(
      `comments/actions/like/${payload.commentId}`,
      { likes: payload.likes, postId: payload.postId },
      thunkAPI
    )
  }
)

export const createComment = createAsyncThunk(
  'singlePost/createComment',
  async (payload, thunkAPI) => {
    return createCommentThunk(
      `comments/create/${payload.id}`,
      payload.content,
      thunkAPI
    )
  }
)

export const createPost = createAsyncThunk(
  'singlePost/createPost',
  async (payload, thunkAPI) => {
    return createPostThunk(`post`, payload, thunkAPI)
  }
)

const singlePostSlice = createSlice({
  name: 'singlePost',
  initialState,
  reducers: {
    toggleCommentTab: (state, { payload }) => {
      state.commentTabIsOpen = payload
    },
    toggleTab: (state, { payload }) => {
      state.tab = payload
    },
  },
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
      .addCase(getPostComments.pending, (state) => {
        state.commentsIsLoading = true
      })
      .addCase(getPostComments.fulfilled, (state, { payload }) => {
        state.commentsIsLoading = false
        state.comments = payload.comments
      })
      .addCase(getPostComments.rejected, (state, { payload }) => {
        state.commentsIsLoading = false
        console.log(payload)
      })
      .addCase(likeComment.pending, (state) => {})
      .addCase(likeComment.fulfilled, (state, { payload }) => {
        state.comments = payload.comments
      })
      .addCase(likeComment.rejected, (state, { payload }) => {
        console.log(payload)
      })
      .addCase(createComment.pending, (state) => {
        state.commentsIsLoading = true
      })
      .addCase(createComment.fulfilled, (state) => {
        state.commentsIsLoading = false
      })
      .addCase(createComment.rejected, (state, { payload }) => {
        state.commentsIsLoading = false
        console.log(payload)
      })
      .addCase(createPost.pending, (state) => {
        state.commentsIsLoading = true
      })
      .addCase(createPost.fulfilled, (state) => {
        state.commentsIsLoading = false
        toast.success('Post created successfully')
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.commentsIsLoading = false
        toast.error(payload)
      })
  },
})

export const { toggleCommentTab, toggleTab } = singlePostSlice.actions

export default singlePostSlice.reducer
