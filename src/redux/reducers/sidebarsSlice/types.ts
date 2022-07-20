export type SidebarLocations = 'Left' | 'Right'

export enum CommentsFilters {
  OPEN = 'Open',
  RESOLVED = 'Resolved',
}

export interface SelectedPage {
  id: string
  title: string
}

export interface SidebarSliceState {
  leftSidebarState: {
    width: number
    isOpen: boolean
    isBubbling: boolean
    location: SidebarLocations
  }
  rightSidebarState: {
    width: number
    isOpen: boolean
    location: SidebarLocations
    activeCommentsFilter: CommentsFilters
  }
  selectedPage: SelectedPage
}
