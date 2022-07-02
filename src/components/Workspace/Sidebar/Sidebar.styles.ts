import styled from 'styled-components'
import {
  SidebarLocations,
  SidebarResizerProps,
  SidebarWrapperProps,
} from './Sidebar.types'

const Wrapper = styled.div<SidebarWrapperProps>`
  position: ${props =>
    (props.isBubbling || props.location === SidebarLocations.RIGHT) &&
    'absolute'};
  top: ${props => (props.isBubbling ? '60px' : 0)};
  right: ${props => props.location === SidebarLocations.RIGHT && '0px'};
  flex-grow: 0;
  flex-shrink: 0;
  width: ${props => (!props.isOpen ? 0 : props.width + 'px')};
  max-width: 480px;
  min-width: ${props => {
    if (props.location === SidebarLocations.LEFT) {
      return !props.isOpen ? '0px' : '180px'
    } else {
      return !props.isOpen ? '0px' : '375px'
    }
  }};
  height: 100%;
  max-height: ${props => props.isBubbling && 'calc(100vh - 120px)'};
  border-top-right-radius: ${props => props.isBubbling && '3px'};
  border-bottom-right-radius: ${props => props.isBubbling && '3px'};
  ${props =>
    props.location === SidebarLocations.RIGHT &&
    'border-left: 1px solid rgba(55, 53, 47, 0.09)'};
  background: ${props =>
    props.location === SidebarLocations.LEFT
      ? 'rgb(247, 246, 243)'
      : 'transparent'}; // background: rgb(37, 37, 37);
  user-select: none;
  opacity: ${props =>
    !props.isOpen ? 0 : !props.isOpen && props.isBubbling ? 1 : 1};
  transform: translateX(
    ${props =>
      !props.isOpen ? -props.width + 'px' : props.isBubbling ? props.width : 0}
  );
  z-index: 10;
  transition: width 0.4s ease-in-out, min-width 0.4s ease-in-out,
    opacity 0.7s ease-in-out;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
`

const ShadowSeparator = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  box-shadow: rgb(55 53 47 / 9%) 0 -1px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5px;
`

const ResizerContainer = styled.div<SidebarResizerProps>`
  position: absolute;
  top: 0;
  ${props =>
    props.location === SidebarLocations.LEFT ? 'right: 0' : 'left: 0'};
  bottom: 0;
  flex-grow: 0;
  width: 1px;
  background: #89857c;
  opacity: 0;

  :hover {
    opacity: 1;
    transition: opacity 300ms ease-in-out 0s;
  }
`

const Resizer = styled.div`
  cursor: col-resize;
  width: 12px;
  height: 100%;
  margin-left: -6px;
`

export {
  Wrapper,
  Container,
  ShadowSeparator,
  Content,
  ResizerContainer,
  Resizer,
}
