import styled from 'styled-components'
import { ContentContainerProps } from './BoardTemplate.types'

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`

const Container = styled.div<ContentContainerProps>`
  width: ${props => (props.isFullWidth ? '85%' : '50%')};
  max-width: 85%;
  min-width: 50%;
  padding: 0 2px;
  //background: greenyellow;
  transition: width 0.4s ease-in-out;
`

export { BoardWrapper, Container }
