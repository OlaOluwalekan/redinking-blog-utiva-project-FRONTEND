import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: false,
  user: null,
  navIsOpen: false,
}

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
  },
})

export const { openNav, closeNav } = userSlice.actions

export default userSlice.reducer
