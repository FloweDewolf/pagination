import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import {
  initialize,
  setTotalPages,
  changePage,
  onInputChange,
} from './PaginationSlice'

import { Container, Table, Row, StyledUl } from './App.styles'
import { log } from 'util'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { perPage, page, totalPages, products, totalProducts, input } =
    useAppSelector((state) => state.pagination.value)

  const inputRef = useRef<HTMLInputElement>(null)
  let isFiltered = !!inputRef.current?.value

  useEffect(() => {
    fetch('https://reqres.in/api/products')
      .then((res) => res.json())
      .then((res) => dispatch(initialize(res.data)))
      .then(() => dispatch(setTotalPages()))
  }, [])

  const displayedProducts = () => {
    const startIndex = (page - 1) * perPage
    const endIndex = startIndex + perPage
    return products.slice(startIndex, endIndex)
  }

  const displayedFilteredProducts = () => {
    const index = products.findIndex(
      (product) => product['id'] === Number(input)
    )
    return products.slice(index, index + 1)
  }

  return (
    <Container>
      <div>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => dispatch(onInputChange(e.target.value))}
          type="number"
          id="input"
          className="input"
          placeholder=" "
        />
        <label htmlFor="input" className="label">
          SORT BY ID NUMBER
        </label>
      </div>
      <Table>
        <div>
          <p>id</p>
          <p>name</p>
          <p>year</p>
        </div>
        {isFiltered
          ? displayedFilteredProducts().map((product) => (
              <Row key={product['id']} backgroundColor={product['color']}>
                <p>{product['id']}</p>
                <p>{product['name']}</p>
                <p>{product['year']}</p>
              </Row>
            ))
          : displayedProducts().map((product) => (
              <Row key={product['id']} backgroundColor={product['color']}>
                <p>{product['id']}</p>
                <p>{product['name']}</p>
                <p>{product['year']}</p>
              </Row>
            ))}
      </Table>
      <StyledUl>
        <li>
          <button onClick={() => dispatch(changePage(-1))}>⟵</button>
        </li>
        <li>
          <button onClick={() => dispatch(changePage(1))}>→</button>
        </li>
      </StyledUl>
    </Container>
  )
}

export default App
