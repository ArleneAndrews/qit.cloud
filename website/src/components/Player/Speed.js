import styled from 'styled-components'

export default styled.button`
  font-size: 1rem;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: solid 2px white;
  background: white;
  color: #298478;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0;
  }
`
