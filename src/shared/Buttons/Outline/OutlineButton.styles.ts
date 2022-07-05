import styled from 'styled-components'
import { OutlineButtonPropsStyles } from './OutlineButton.types'

export const StyledButton = styled.div<OutlineButtonPropsStyles>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  margin-top: 8px;
  border: 1px solid ${props => props.borderColor};
  border-radius: 3px;
  overflow: hidden;
  user-select: none;
  background: ${props =>
    props.isActive ? props.hoverColor : props.background};
  transition: background 50ms ease-in-out;

  :active {
    background: ${props => props.activeColor};
  }

  p {
    font-size: 14px;
    line-height: 21px;
    color: ${props => props.color};
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
