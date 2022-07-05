import styled from 'styled-components'

const StyledButton = styled.div`
  position: absolute;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 1px;
  border-radius: 3px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.15s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.15s ease-in-out;
  }
`

export default StyledButton
