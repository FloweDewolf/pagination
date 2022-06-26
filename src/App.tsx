import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { initialize, setTotalPages, changePage } from './PaginationSlice'

import { Container, Table, Row, StyledUl } from './App.styles'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { page, perPage, totalProducts, totalPages } = useAppSelector(
    (state) => state.pagination.value
  )

  useEffect(() => {
    fetch('https://reqres.in/api/products')
      .then((res) => res.json())
      .then((res) => dispatch(initialize(res.data)))
      .then(() => dispatch(setTotalPages()))
  }, [])

  return (
    <Container>
      <div>
        <input type="number" id="input" />
        <label htmlFor="input">SORT BY ID NUMBER</label>
      </div>
      <Table>
        <div>
          <p>id</p>
          <p>name</p>
          <p>year</p>
        </div>
        <Row backgroundColor={'blue'}>
          <p>1</p>
          <p>wine</p>
          <p>1600</p>
        </Row>
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
