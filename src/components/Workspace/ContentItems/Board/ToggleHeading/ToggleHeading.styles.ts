import styled from 'styled-components'
import { ItemStyles } from '../Text/TextItem.types'

export const Container = styled.div<ItemStyles>`
  display: inline-flex;
  width: 100%;
  height: auto;
  padding: 3px 2px;
  background: ${props => props.background};
`
