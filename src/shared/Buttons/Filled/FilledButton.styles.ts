import styled from 'styled-components'
import { ColorInfo } from './FilledButton.types'

export const StyledButton = styled.div<ColorInfo>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  height: 100%;
  min-width: 60px;
  min-height: 30px;
  margin: 15px auto;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset, rgb(15 15 15 / 10%) 0 1px 2px;
  user-select: none;
  background: ${props =>
    props.colorInfo?.backgroundColor
      ? props.colorInfo.backgroundColor
      : 'rgb(46, 170, 220)'};
  color: ${props => (props.colorInfo?.color ? props.colorInfo.color : 'white')};
  transition: background 0.1s ease-in;

  :hover {
    background: ${props =>
      props.colorInfo?.hoverColor
        ? props.colorInfo.hoverColor
        : 'rgb(6, 156, 205)'};
  }
  :active {
    background: ${props =>
      props.colorInfo?.activeColor
        ? props.colorInfo.activeColor
        : 'rgb(0, 141, 190)'};
  }
`

export const Title = styled.span`
  margin-bottom: 3px;
  padding-top: 2px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: white;
  fill: white;
`
