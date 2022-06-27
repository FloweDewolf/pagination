import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import {
  changePage,
  initialize,
  onInputChange,
  setTotalPages,
  setIsFiltered,
} from '../PaginationSlice'

import Row from './Row'

import { Container, StyledUl, Table } from './App.styles'

const App: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    dispatch(setIsFiltered(!!inputRef.current?.value))
  }, [inputRef.current?.value])

  const { perPage, page, products, input, isFiltered } = useAppSelector(
    (state) => state.pagination.value
  )

  const fetchData = () => {
    const API = 'https://reqres.in/api/products'
    fetch(API)
      .then((res) => res.json())
      .then((res) => dispatch(initialize(res.data)))
      .then(() => dispatch(setTotalPages()))
  }

  useEffect(() => {
    fetchData()
    dispatch(onInputChange(location.pathname.substring(1)))
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
        <Routes>
          <Route
            path="/"
            element={
              isFiltered
                ? displayedFilteredProducts().map((product) => (
                    <Row key={product['id']} product={product} />
                  ))
                : displayedProducts().map((product) => (
                    <Row key={product['id']} product={product} />
                  ))
            }
          />
          <Route
            path="/:productId"
            element={
              isFiltered
                ? displayedFilteredProducts().map((product) => (
                    <Row key={product['id']} product={product} />
                  ))
                : displayedProducts().map((product) => (
                    <Row key={product['id']} product={product} />
                  ))
            }
          />
        </Routes>
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
