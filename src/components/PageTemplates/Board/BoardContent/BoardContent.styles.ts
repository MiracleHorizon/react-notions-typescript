import styled from 'styled-components'

interface ContentProps {
  isSmallText: boolean
  fontFamily: string
}

export const Wrapper = styled.div<ContentProps>`
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
    //font-size: ${props => (props.isSmallText ? '1.8em' : '2em')};
  }
`

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 30vh;
  overflow: auto;
  //background: yellow;
`

export const AddContentField = styled.div`
  width: calc(100% - 100px);
  height: 40px;
  margin-top: 2px;
  margin-left: 50px;
  background: pink;
`
