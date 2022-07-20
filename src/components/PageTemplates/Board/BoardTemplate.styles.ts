import styled from 'styled-components'
import { ContentContainerProps } from './BoardTemplate.types'

export const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`

export const BoardContainer = styled.div<ContentContainerProps>`
  width: ${props => (props.isFullWidth ? '90%' : '60%')};
  max-width: 90%;
  min-width: 60%;
  //background: rgba(173, 255, 47, 0.3);
  transition: width 0.3s ease-in-out;
`

export const Container = styled.div``
