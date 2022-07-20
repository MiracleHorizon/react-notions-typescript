import styled from 'styled-components'

export const OptionsContainer = styled.div<{ topOffset?: number | string }>`
  position: absolute;
  top: ${props => (props.topOffset ? props.topOffset + 'px' : '2px')};
  left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
