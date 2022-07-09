import styled from 'styled-components'
import { SidebarLocations } from '../Sidebar.types'

const ResizerContainer = styled.div<{ location: SidebarLocations }>`
  position: absolute;
  top: 0;
  ${props =>
    props.location === SidebarLocations.LEFT ? 'right: 0' : 'left: -1px'};
  bottom: 0;
  flex-grow: 0;
  width: 1px;
  //background: #89857c;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease-in-out 0s;

  :hover {
    opacity: 1;
  }
`

const Resizer = styled.div`
  cursor: col-resize;
  width: 12px;
  height: 100%;
  margin-left: -6px;
`

export { ResizerContainer, Resizer }
