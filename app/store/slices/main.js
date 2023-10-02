import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    currentMode: Cookies.get('CurrentMode') || 'light',
    direction: Cookies.get('NEXT_LOCALE') || 'en',
    preloader: true,
    sidebar: 1,
  },
  reducers: {
    directionFun: (state, action) => {
      state.direction = action.payload
    },
    changeMode: (state, action) => {
      state.currentMode = action.payload
      Cookies.set('CurrentMode', action.payload)
    },
    changePreloader: (state, action) => {
      state.preloader = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { directionFun, changePreloader, changeMode, addToHistory } =
  mainSlice.actions
export default mainSlice.reducer
