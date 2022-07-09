import styled from 'styled-components'
import { PageFontFamilies } from 'redux/workSpaceSlice/types'

interface ContentProps {
  isSmallText: boolean
  fontFamily: PageFontFamilies
}

const Content = styled.div<ContentProps>`
  min-height: 200px;
  //height: 100vh;
  width: 100%;

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

const PageTitle = styled.h1`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  font-size: 40px;
  font-weight: 700;
  white-space: pre-wrap;
  word-break: break-word;
  overflow: hidden;
  color: rgb(55, 53, 47);
`

export { Content, PageTitle }
