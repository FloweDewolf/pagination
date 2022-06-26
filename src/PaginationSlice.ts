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
    setTotalPages: (state) => {
      state.value = {
        ...state.value,
        totalPages: Math.ceil(state.value.totalProducts / state.value.perPage),
      }
    },
    changePage: (state, action: PayloadAction<number>) => {
      if (action.payload === 1 && state.value.page === state.value.totalPages) {
        return
      }
      else if (action.payload === -1 && state.value.page === 1) {
        return
      }

      state.value = {
        ...state.value,
        page:
          action.payload === 1 ? state.value.page + 1 : state.value.page - 1,
      }
    },
  },
})

export const { initialize, setTotalPages, changePage } = paginationSlice.actions
export default paginationSlice.reducer
