import { createSlice } from '@reduxjs/toolkit'

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    drawer: {
      status: 'false',
      currentComponent: '',
    },
    zoomSlider: 50,
  },
  reducers: {
    changeCurrentComponent: (state, action) => {
      state.drawer.currentComponent = action.payload
    },
    ChangeDrawerStatus: (state, action) => {
      state.drawer.status = action.payload
    },
    ChangeZoomSlider: (state, action) => {
      state.zoomSlider = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCurrentComponent, ChangeDrawerStatus, ChangeZoomSlider } =
  statusSlice.actions
export default statusSlice.reducer
