import React from 'react'
import PropTypes from 'prop-types'
import { StyledDiv } from './Row.styles'

interface Product {
  product: {
    id: string
    color: string
    name: string
    year: string
  }
}

const Row = ({ product }: Product) => {
  return (
    <StyledDiv key={product.id} backgroundColor={product.color}>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.year}</p>
    </StyledDiv>
  )
}

Row.propTypes = {
  product: PropTypes.object,
}

export default Row
