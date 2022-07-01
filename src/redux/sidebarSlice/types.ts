interface ActivePage {
  title: string
  id: number
}

interface SidebarSliceState {
  isOpen: boolean
  isBubbling: boolean
  activePage: ActivePage
}

export type { SidebarSliceState, ActivePage }
