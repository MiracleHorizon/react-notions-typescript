import styled from 'styled-components'

export const StyledButton = styled.div`
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 24px;
  border-radius: 3px;
  fill: rgba(55, 53, 47, 0.35);
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`
