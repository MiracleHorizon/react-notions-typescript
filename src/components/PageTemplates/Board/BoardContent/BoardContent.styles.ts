import styled from 'styled-components'
import { PageFontFamilies } from 'redux/workSpaceSlice/types'

interface ContentProps {
  isSmallText: boolean
  fontFamily: PageFontFamilies
}

const Content = styled.div<ContentProps>`
  min-height: 200px;
  width: 100%;
  overflow-y: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p,
  div {
    font-family: ${props => props.fontFamily} !important;
    font-size: ${props => (props.isSmallText ? '1.8em' : '2em')};
  }
`

export { Content }
