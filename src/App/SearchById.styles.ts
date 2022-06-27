import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    user-select: none;
    font-size: 50px;
    color: gray;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 3px solid #27fb6b;
    font-size: 50px;
    background-color: transparent;
    color: white;
    outline: none;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      appearance: none;
    }
  }

  .input:focus ~ .label,
  .input:not(:placeholder-shown).input:not(:focus) ~ .label {
    top: -15px;
    left: 0;
    font-size: 30px;
  }
`
