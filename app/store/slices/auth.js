import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
  },
  reducers: {
    logOut: (state) => {
      state.userInfo = {}
      Cookies.remove('token')
      window.location.href = '/'
    },
    addUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { logOut, addUserInfo } = authSlice.actions

export default authSlice.reducer