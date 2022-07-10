import React, { RefObject } from 'react'
import { SidebarLocations } from '../Sidebar.types'

export default interface SidebarResizerProps {
  location: SidebarLocations
  resizerRef: RefObject<HTMLDivElement>
  isActive: boolean
  isResizingEnabled: boolean
  onClickAction: (e: React.MouseEvent) => void
}
