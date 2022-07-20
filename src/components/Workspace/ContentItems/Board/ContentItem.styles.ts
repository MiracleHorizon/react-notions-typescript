import styled from 'styled-components'

export const Wrapper = styled.div<{
  marginY: number
  height?: number
}>`
  position: relative;
  width: 100%;
  min-height: ${props => (props.height ? props.height : '30px')};
  height: auto;
  margin: ${props => props.marginY}px 0;
  padding-left: 50px;
`
