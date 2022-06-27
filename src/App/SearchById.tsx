import React, { useRef } from 'react'
import { onInputChange } from '../PaginationSlice'
import { Container } from './SearchById.styles'
import { useAppDispatch, useAppSelector } from '../hooks'

const SearchById = () => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const { input } = useAppSelector((state) => state.pagination.value)

  return (
    <Container>
      <input
        data-testid="input-element"
        ref={inputRef}
        value={input}
        onChange={(e) => dispatch(onInputChange(e.target.value))}
        type="number"
        id="input"
        className="input"
        placeholder=" "
      />
      <label htmlFor="input" className="label">
        FILTER BY ID NUMBER
      </label>
    </Container>
  )
}

export default SearchById
