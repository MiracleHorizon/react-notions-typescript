import { SidebarLocations } from 'redux/reducers/sidebarsSlice/types'

export default interface SidebarWrapperProps {
  width: number
  isOpen: boolean
  isBubbling?: boolean
  location: SidebarLocations
  isResizerHovering: boolean
  isResizingEnabled: boolean
}
