import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import postSlice from './features/post/postSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
  },
})

export default store
