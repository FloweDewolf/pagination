import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { initialize, setTotalPages, changePage } from './PaginationSlice'

import { Container, Table, Row, StyledUl } from './App.styles'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { perPage, page, totalPages, products, totalProducts } = useAppSelector(
    (state) => state.pagination.value
  )

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

  return (
    <Container>
      <div>
        <input type="number" id="input" className="input" placeholder=" " />
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
        {displayedProducts().map((product) => (
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
