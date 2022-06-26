import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    value: {
      perPage: 5,
      page: 1,
      totalPages: 0,
      products: [],
      totalProducts: 0,
    },
  },
  reducers: {
    initialize: (state, action: PayloadAction<[]>) => {
      state.value = {
        ...state.value,
        products: action.payload,
        totalProducts: action.payload.length,
      }
    },
  },
})

export const { initialize } = paginationSlice.actions
export default paginationSlice.reducer
