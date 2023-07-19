import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import postSlice from './features/post/postSlice'
import singlePostSlice from './features/single-post/singlePostSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    singlePost: singlePostSlice,
  },
})

export default store
