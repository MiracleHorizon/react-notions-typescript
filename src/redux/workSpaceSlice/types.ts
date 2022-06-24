enum CoverColors {
  RED = '#eb5757',
  BLUE = '#1c9ace',
  YELLOW = '#f9bf52',
  BEIGE = '#ffefe3',
  PINK = '#ff388a',
  WHITE = '#fff',
}

interface IWorkspacePage {
  id: number
  pageTitle: string
  icon: string
  cover: CoverColors
  isHasIcon: boolean
  isHasCover: boolean
  isHasComments: boolean
  isFavorite: boolean
}

interface IPageHistoryNote {
  userName: string
  pageTitle: string
  pageIcon: string
  updated: string //!
  deleted: string //!
}

interface IPageOptions {
  isFullWidth: boolean
  isFavorite: boolean
  isSmallText: boolean
  history: IPageHistoryNote[]
}

interface IWorkspaceSliceState {
  pages: IWorkspacePage[] | []
  currentPage: IWorkspacePage
  options?: IPageOptions
}

export type { IWorkspaceSliceState, IWorkspacePage }
export { CoverColors }
