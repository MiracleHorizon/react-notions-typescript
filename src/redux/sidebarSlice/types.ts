interface ActivePage {
  title: string
  id: number
}

interface SidebarSliceState {
  isOpen: boolean
  activePage: ActivePage
}

export type { SidebarSliceState, ActivePage }
