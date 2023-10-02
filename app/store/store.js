import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './slices/main'
import authReducer from './slices/auth'
import statusReducer from './slices/status'

export default configureStore({
  reducer: {
    main: mainReducer,
    auth: authReducer,
    status: statusReducer,
  },
})
