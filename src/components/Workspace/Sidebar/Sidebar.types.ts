type SidebarLocations = 'Left' | 'Right'

interface SidebarWrapperProps {
  location: SidebarLocations
  isOpen: boolean
  isBubbling?: boolean
  width: number
  isResizerHovering: boolean
  isResizingEnabled: boolean
}

export type { SidebarLocations, SidebarWrapperProps }
