import styled from 'styled-components'

const StyledSeparator = styled.div<{ color?: string }>`
  width: 100%;
  height: 1px;
  margin: 6px 0;
  background-color: ${props => (props.color ? props.color : ' #f4f3f3')};
`

export default StyledSeparator
