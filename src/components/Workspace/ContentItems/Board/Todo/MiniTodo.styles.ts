import styled from 'styled-components'
import { TodoContainerProps } from './MiniTodo.types'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: 30px;
  height: auto;
`

export const Container = styled.div<TodoContainerProps>`
  display: inline-flex;
  width: 100%;
  height: auto;
  padding: 3px 2px;
  background: ${props => props.background};

  div[contenteditable] {
    text-decoration: ${props => props.isActive && 'line-through'};
    white-space: pre-wrap;
    word-break: break-word;
    color: ${props =>
      !props.isActive
        ? props.textColor === 'Default'
          ? 'rgb(55, 53, 47)'
          : props.textColor
        : 'rgba(55, 53, 47, 0.25)'};
    caret-color: rgb(55, 53, 47);
    transition: all ease-in-out 50ms;

    :empty:after {
      content: attr(placeholder);
      -webkit-text-fill-color: rgba(55, 53, 47, 0.2);
    }
  }
`

export const ButtonContainer = styled.div`
  padding-top: 4px;
  margin-right: 8px;
`
