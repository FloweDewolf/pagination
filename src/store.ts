import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './PaginationSlice'
export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
