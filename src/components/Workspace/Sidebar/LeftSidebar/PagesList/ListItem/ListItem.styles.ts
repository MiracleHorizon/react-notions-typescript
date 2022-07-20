import styled from 'styled-components'
import { ItemContainerProps } from './ListItem.types'
import { pagesListsStylesHandler } from 'styles/stylesHandlers'

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemContainer = styled.li<ItemContainerProps>`
  position: relative;
  cursor: pointer;
  height: 27px;
  min-height: 25px;
  max-height: 27px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  padding-left: ${props => props.paddingLeft + 'px'};
  width: 100%;
  margin: 1px;
  border-radius: 3px;
  background: ${props => pagesListsStylesHandler.itemBackgroundHandler(props)};
  transition: background 20ms ease-in 0s;

  p {
    ${props => (props.isHovering ? 'max-width: 65%;' : 'max-width: 85%;')};
  }
`

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`

export const Title = styled.p<{ isSelected: boolean }>`
  max-height: 100%;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props =>
    props.isSelected ? 'rgb(55, 53, 47)' : 'rgba(55, 53, 47, 0.65)'};
`
