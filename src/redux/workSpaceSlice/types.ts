interface IWorkspacePage {
  id: number
  pageTitle: string
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
