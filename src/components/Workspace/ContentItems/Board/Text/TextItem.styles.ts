import styled from 'styled-components'
import { ItemStyles } from './TextItem.types'

const ItemContainer = styled.div<ItemStyles>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  padding: 2px 4px;
  color: ${props => props.textColor};
  background: ${props => props.background};

  div {
    width: 100%;
    height: 100%;
    line-height: 24px;
  }

  div[contenteditable]:empty:focus:after {
    content: attr(placeholder);
    -webkit-text-fill-color: rgba(55, 53, 47, 0.5);
  }
`

export default ItemContainer
