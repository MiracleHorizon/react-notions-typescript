import styled from 'styled-components'
import { StyledOptionProps } from './CoverOptionsPanel.types'

const PanelWrapper = styled.div<{ isFullWidth: boolean }>`
  position: relative;
  width: ${props => (props.isFullWidth ? '88%' : '50%')};
  max-width: 100%;
  user-select: none;
  transition: width 0.3s ease-in-out;
`

const CoverOptions = styled.div<{ isHovering: boolean }>`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px;
  background: white;
  opacity: ${props => (props.isHovering ? 1 : 0)};
  z-index: 10;
  transition: opacity 0.2s ease-in-out;
`

const StyledOption = styled.div<StyledOptionProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 4px 6px;
  border-right: ${props =>
    props.borderRight ? '1px solid rgba(55, 53, 47, 0.09)' : 'none'};
  border-radius: ${props =>
    props.position === 'Left' ? '3px 0 0 3px' : '0 3px 3px 0'};
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgb(239, 239, 238);
  }
  :active {
    background: rgb(223, 223, 222);
  }
`

const OptionTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgba(55, 53, 47, 0.65);
`

export { PanelWrapper, CoverOptions, StyledOption, OptionTitle }
