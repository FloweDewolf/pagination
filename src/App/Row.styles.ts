import styled from 'styled-components'

interface IRow {
  backgroundColor: string
}

export const StyledDiv = styled.div<IRow>`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid white;
  border-top: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  
  p {
    text-align: center;
  }
`
