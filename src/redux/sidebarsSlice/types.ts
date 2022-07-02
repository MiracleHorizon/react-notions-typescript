import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'

interface ActivePage {
  title: string
  id: number
}

interface SidebarSliceState {
  leftSidebar: {
    isOpen: boolean
    isBubbling: boolean
    location: SidebarLocations.LEFT
  }
  rightSidebar: {
    isOpen: boolean
    location: SidebarLocations.RIGHT
    width: number
  }
  activePage: ActivePage
}

export type { SidebarSliceState, ActivePage }
