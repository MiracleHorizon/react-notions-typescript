import styled from 'styled-components'
import SeparatorProps from './Separator.types'

const StyledSeparator = styled.div<SeparatorProps>`
  width: 100%;
  height: 1px;
  margin: 5px 0;
  background-color: ${props => (props.color ? props.color : ' #f4f3f3')};
`

export default StyledSeparator
