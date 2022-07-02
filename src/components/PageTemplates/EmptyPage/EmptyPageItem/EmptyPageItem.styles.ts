import styled from 'styled-components'
import { StyledItemProps } from './EmptyPageItem.types'

const StyledItem = styled.div<StyledItemProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 1px 0;
  padding: 3px 0;
  border-radius: 3px;
  background: ${props => props.isActive && 'rgba(46, 170, 220, 0.15)'};
  user-select: none;
  transition: background 0.05s ease-in-out;

  :active {
    background: rgba(46, 170, 220, 0.25);
    transition: background 0.05s ease-in-out;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const IconContainer = styled.div`
  width: 20px;
  height: 26px;
  margin-left: 2px;
  margin-right: 8px;
`

const Icon = styled.img`
  width: inherit;
  height: inherit;
  opacity: 0.4;
  pointer-events: none;
`

const TitleContainer = styled.div`
  margin-bottom: 1px;
`

const Title = styled.span`
  font-size: 16px;
  color: rgba(55, 53, 47, 0.5);
`

export { StyledItem, IconContainer, Icon, TitleContainer, Title }
