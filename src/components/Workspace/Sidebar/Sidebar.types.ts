enum SidebarLocations {
  LEFT = 'left',
  RIGHT = 'right',
}

interface SidebarWrapperProps {
  location: SidebarLocations
  isOpen: boolean
  isBubbling?: boolean
  width: number
}

interface SidebarResizerProps {
  location: SidebarLocations
}

export { SidebarLocations }
export type { SidebarWrapperProps, SidebarResizerProps }
