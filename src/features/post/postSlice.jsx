import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  posts: [],
}

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('http://localhost:9000/api/v1/post')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
)

const postSlice = createSlice({
  name: 'post',
  initialState,
})

export default postSlice.reducer
