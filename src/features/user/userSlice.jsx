import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
import {
  confirmCodeThunk,
  registerUserThunk,
  updateUserThunk,
} from './userThunk'
import { addUserToLocalStorage } from '../../utils/localStorage'

const initialState = {
  darkMode: false,
  user: null,
  navIsOpen: false,
  isLoading: false,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (payload, thunkAPI) => {
    return registerUserThunk('/auth/register', payload, thunkAPI)
  }
)

export const confirmCode = createAsyncThunk(
  'user/confirmCode',
  async (payload, thunkAPI) => {
    return confirmCodeThunk('/auth/verifyEmail', payload, thunkAPI)
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (payload, thunkAPI) => {
    return updateUserThunk(
      `/user/dashboard/${payload.id}`,
      payload.data,
      thunkAPI
    )
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openNav: (state) => {
      state.navIsOpen = true
    },
    closeNav: (state) => {
      state.navIsOpen = false
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload
        state.isLoading = false
        addUserToLocalStorage(payload)
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
      .addCase(confirmCode.pending, (state) => {
        state.isLoading = true
      })
      .addCase(confirmCode.fulfilled, (state, { payload }) => {
        state.user = payload
        state.isLoading = false
        addUserToLocalStorage(payload)
      })
      .addCase(confirmCode.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload
        state.isLoading = false
        addUserToLocalStorage(payload)
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export const { openNav, closeNav, toggleDarkMode } = userSlice.actions

export default userSlice.reducer
