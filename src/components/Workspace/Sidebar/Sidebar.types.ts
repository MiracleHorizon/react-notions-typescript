enum SidebarLocations {
  LEFT = 'left',
  RIGHT = 'right',
} // Переработать

interface SidebarWrapperProps {
  location: SidebarLocations
  isOpen: boolean
  isBubbling?: boolean
  width: number
  isResizerHovering: boolean
  isResizingEnabled: boolean
}

export { SidebarLocations }
export type { SidebarWrapperProps }
