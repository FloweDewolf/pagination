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
  reducers: {},
})

export const {  } = paginationSlice.actions
export default paginationSlice.reducer
