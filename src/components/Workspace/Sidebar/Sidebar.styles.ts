import styled from 'styled-components'
import { SidebarWrapperProps } from './Sidebar.types'
import sidebarStylesHandler from 'utils/sidebarStylesHandler'

const Wrapper = styled.div<SidebarWrapperProps>`
  top: ${props => (props.isBubbling ? '60px' : 0)};
  right: ${props => props.location === 'Right' && '0px'};
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 480px;
  height: 100%;
  max-height: ${props => props.isBubbling && 'calc(100vh - 120px)'};
  border-top-right-radius: ${props => props.isBubbling && '3px'};
  border-bottom-right-radius: ${props => props.isBubbling && '3px'};
  border-left: ${props =>
    props.location === 'Right' ? '1px solid rgba(55, 53, 47, 0.09)' : 'none'};
  background: ${props =>
    props.location === 'Left'
      ? 'rgb(247, 246, 243)'
      : 'white'}; // background: rgb(37, 37, 37);
  z-index: 10;
  user-select: none;
  opacity: ${props => (props.isOpen || props.isBubbling ? 1 : 0)};
  position: ${props => sidebarStylesHandler.positionHandler(props)};
  box-shadow: ${props => sidebarStylesHandler.boxShadowHandler(props)};
  width: ${props =>
    props.isOpen || props.isBubbling ? props.width + 'px' : 0};
  min-width: ${props => sidebarStylesHandler.minWidthHandler(props)};
  transform: translateX(
    ${props => sidebarStylesHandler.transformHandler(props)}
  );
`

// {props =>
// props.location === SidebarLocations.RIGHT && 'width 50ms ease-out'};

//transition: width 0.3s ease-in-out, min-width 0.3s ease-in-out,
//  opacity 0.35s ease-in-out;

const Container = styled.div<{
  isResizerHovering?: boolean
  isResizingEnabled?: boolean
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  box-shadow: ${props =>
    props.isResizerHovering || props.isResizingEnabled
      ? 'rgb(0 0 0 / 10%) -2px 0px 0px inset'
      : ''};
  transition: box-shadow 0.3s ease-in 0s;
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
  padding: 4px;
`

export { Wrapper, Container, ShadowSeparator, Content }
