import styled from 'styled-components'
import { PageFontFamilies } from 'redux/workSpaceSlice/types'

const Content = styled.div<{ fontFamily: PageFontFamilies }>`
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
  p {
    font-family: ${props => props.fontFamily} !important;
  }
`

export { Content }
