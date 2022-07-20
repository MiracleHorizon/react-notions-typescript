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
  border-radius: 4px;
  overflow: hidden;
  user-select: none;
  background: ${props =>
    props.isActive ? props.hoverColor : props.background};
  transition: background 50ms ease-in-out;

  :hover {
    background: ${props => props.hoverColor};
  }
  :active {
    background: ${props => props.activeColor};
  }
  :focus-visible {
    border: none;
    box-shadow: rgb(46 170 220 / 70%) 0 0 0 1px inset,
      rgb(46 170 220 / 40%) 0 0 0 2px !important;
  }

  p {
    margin-bottom: 1px;
    font-size: 14px;
    line-height: 21px;
    color: ${props => props.color};
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
