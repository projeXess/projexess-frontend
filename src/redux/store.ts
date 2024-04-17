import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import projectSlice from './slices/projectSlice'

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        projectReducer: projectSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch