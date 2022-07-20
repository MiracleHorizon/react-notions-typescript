import styled from 'styled-components'

const ButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 28px;
  margin: 0 1px;
  padding: 4px 8px;
  border-radius: 3px;
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export default ButtonContainer
