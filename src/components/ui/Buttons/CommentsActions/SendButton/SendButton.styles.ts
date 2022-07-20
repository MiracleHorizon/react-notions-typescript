import styled from 'styled-components'

const StyledButton = styled.div<{ isActive: boolean }>`
  cursor: ${props => (props.isActive ? 'pointer' : 'text')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`

export default StyledButton
