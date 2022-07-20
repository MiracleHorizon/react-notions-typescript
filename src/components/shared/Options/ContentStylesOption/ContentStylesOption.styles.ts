import styled from 'styled-components'

import { OptionStyles } from './ContentStylesOption.types'

export const OptionContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 28px;
  border-radius: 3px;
  margin: 1px 4px;
  transition: background 20ms ease-in 0s;
  user-select: none;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const StylePreviewContainer = styled.div<OptionStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 10px;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset;
  background: ${props => (props.background ? props.background : 'transparent')};

  span {
    font-size: 16px;
    font-weight: 500;
    color: ${props => (props.textColor ? props.textColor : 'rgb(55, 53, 47)')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const StyleTitle = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
`
