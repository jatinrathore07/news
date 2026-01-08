import { configureStore } from '@reduxjs/toolkit'
import  searchingReducer from '../features/searchingSlice.js'

export const store = configureStore({
  reducer: {
    search: searchingReducer,
  },
})