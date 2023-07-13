import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
import {
  checkUsernameThunk,
  confirmCodeThunk,
  registerUserThunk,
  sendVerificationEmailThunk,
  updateUserThunk,
  loginUserThunk,
} from './userThunk'
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  darkMode: false,
  user: getUserFromLocalStorage(),
  navIsOpen: false,
  isLoading: false,
  userMenuIsOpen: false,
  currentStep: 1,
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

export const sendVerificationEmail = createAsyncThunk(
  'user/sendVerificationEmail',
  async (payload, thunkAPI) => {
    return sendVerificationEmailThunk(
      `/auth/sendVerifyEmail`,
      payload,
      thunkAPI
    )
  }
)

export const checkUsername = createAsyncThunk(
  'user/checkUsername',
  async (payload, thunkAPI) => {
    return checkUsernameThunk(
      `/auth/checkUsername/query?username=${payload.username}`,
      payload,
      thunkAPI
    )
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, thunkAPI) => {
    return loginUserThunk('/auth/login', payload, thunkAPI)
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
    toggleUserMenu: (state) => {
      state.userMenuIsOpen = !state.userMenuIsOpen
    },
    logOut: (state) => {
      state.user = null
      removeUserFromLocalStorage()
    },
    setCurrentStep: (state, { payload }) => {
      console.log(payload)
      state.currentStep = payload
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
      .addCase(sendVerificationEmail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(sendVerificationEmail.fulfilled, (state, { payload }) => {
        state.user = payload
        state.isLoading = false
        addUserToLocalStorage(payload)
      })
      .addCase(sendVerificationEmail.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
      .addCase(checkUsername.pending, (state) => {
        state.isLoading = true
      })
      .addCase(checkUsername.fulfilled, (state, { payload }) => {
        state.isLoading = false
      })
      .addCase(checkUsername.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload
        state.isLoading = false
        addUserToLocalStorage(payload)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export const {
  openNav,
  closeNav,
  toggleDarkMode,
  toggleUserMenu,
  logOut,
  setCurrentStep,
} = userSlice.actions

export default userSlice.reducer
