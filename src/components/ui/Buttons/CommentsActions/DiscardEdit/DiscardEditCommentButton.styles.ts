import styled from 'styled-components'

export const StyledButton = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(55, 53, 47, 0.45);
  transition: background 50ms ease-in-out;

  :hover {
    background: rgba(55, 53, 47, 0.35);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`
