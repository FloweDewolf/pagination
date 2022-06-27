import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`
export const Buttons = styled.ul`
  display: flex;
  list-style: none;

  li {
    width: 100%;

    :not(:first-child) {
      margin-left: 18px;
    }

    button {
      height: 75px;
      width: 75px;
      line-height: 75px;
      text-align: center;
      background-color: #27fb6b;
      border: none;
      border-radius: 50%;
      color: #0a2e36;
      cursor: pointer;

      :focus {
        background-color: #14cc60;
      }
    }
  }
`

export const Table = styled.div`
  display: grid;
  align-self: start;

  div:first-child {
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 2px solid white;

    p {
      text-align: center;
    }
  }
`
