import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'

enum CommentsFilters {
  OPEN = 'Open',
  RESOLVED = 'Resolved',
}

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
    activeCommentsFilter: CommentsFilters
  }
  activePage: ActivePage
}

export type { SidebarSliceState, ActivePage }
export { CommentsFilters }
