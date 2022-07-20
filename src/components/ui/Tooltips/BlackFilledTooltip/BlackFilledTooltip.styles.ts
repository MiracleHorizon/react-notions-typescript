import styled from 'styled-components'
import { ElementCoords } from 'types'

export const appearDuration = 300
export const transitionName = `example`

export const Wrapper = styled.div<ElementCoords>`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: max-content;
  min-width: 0;
  padding: 3px 7px;
  border-radius: 3px;
  background: rgb(15, 15, 15);
  box-shadow: rgb(0 0 0 / 30%) 0 1px 4px;
  user-select: none;
  z-index: 2000;

  h5,
  p {
    font-size: 12px;
    margin: 1px 0;
    font-weight: 600;
  }

  &.${transitionName}-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }

  &.${transitionName}-exit {
    opacity: 1;
  }

  &.${transitionName}-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;

  h5 {
    margin-right: 4px;
  }
`

export const Title = styled.h5`
  color: rgba(255, 255, 255, 0.9);
`

export const Description = styled.p`
  color: rgba(206, 205, 202, 0.6);
`
