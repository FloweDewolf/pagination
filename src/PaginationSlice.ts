import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PaginationState {
  value: {
    perPage: number
    page: number
    prevPage: number
    totalPages: number
    products: []
    totalProducts: number
    input: string
    isFiltered: Boolean
  }
}

const initialState: PaginationState = {
  value: {
    perPage: 5,
    page: 1,
    prevPage: 1,
    totalPages: 0,
    products: [],
    totalProducts: 0,
    input: '',
    isFiltered: false,
  },
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
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
      if (
        state.value.isFiltered ||
        (action.payload === 1 && state.value.page === state.value.totalPages) ||
        (action.payload === -1 && state.value.page === 1)
      )
        return

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
    setIsFiltered: (state, action: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        isFiltered: action.payload,
      }
    },
  },
})

export const {
  initialize,
  setTotalPages,
  changePage,
  onInputChange,
  setIsFiltered,
} = paginationSlice.actions
export default paginationSlice.reducer
