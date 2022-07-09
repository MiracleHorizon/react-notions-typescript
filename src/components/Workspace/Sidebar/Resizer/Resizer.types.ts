import { RefObject } from 'react'
import { SidebarLocations } from '../Sidebar.types'

export default interface SidebarResizerProps {
  location: SidebarLocations
  resizerRef: RefObject<HTMLDivElement>
  onClickAction: () => void
}
