import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    value: {
      perPage: 5,
      page: 1,
      totalPages: 0,
      products: [],
      savedProducts: [],
      totalProducts: 0,
      input: '',
    },
  },
  reducers: {
    initialize: (state, action: PayloadAction<any>) => {
      state.value = {
        ...state.value,
        products: action.payload,
        totalProducts: action.payload.length,
      }
    },
    setTotalPages: (state) => {
      state.value = {
        ...state.value,
        totalPages: Math.ceil(state.value.totalProducts / state.value.perPage),
      }
    },
    changePage: (state, action: PayloadAction<number>) => {
      if (action.payload === 1 && state.value.page === state.value.totalPages) {
        return
      } else if (action.payload === -1 && state.value.page === 1) {
        return
      }

      state.value = {
        ...state.value,
        page:
          action.payload === 1 ? state.value.page + 1 : state.value.page - 1,
      }
    },
    onInputChange: (state, action: PayloadAction<string>) => {
      state.value = {
        ...state.value,
        input: action.payload,
      }
    },
  },
})

export const { initialize, setTotalPages, changePage, onInputChange } =
  paginationSlice.actions
export default paginationSlice.reducer
