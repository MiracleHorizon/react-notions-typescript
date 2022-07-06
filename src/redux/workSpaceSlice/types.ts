import { PageTemplates } from '../popupsSlice/types'

export enum CoverColors {
  RED = '#eb5757',
  BLUE = '#1c9ace',
  YELLOW = '#f9bf52',
  BEIGE = '#ffefe3',
  PINK = '#ff388a',
  WHITE = '#eaeaea',
  PURPLE = '#E1D3F8',
  GREEN = '#CCE7E1',
  ORANGE = '#FDDFCC',
}

interface IComment {
  title: string
  createDate?: Date
}

interface BoardPageDefaultParams {
  template: PageTemplates.BOARD
  id: number | null
  title: string | null
  pagesSettings: {
    isSmallText: boolean
    isFullWidth: boolean
    isFavorite: boolean
    selectedFont: string
  }
  coverInfo: {
    isHasCover: boolean
    cover: CoverColors | null
  }
  iconInfo: {
    isHasIcon: boolean
    icon: string | null
  }
  commentsInfo: {
    isHasComments: boolean
    comments: IComment[] | []
  }
}

interface TaskListPageDefaultParams {}

interface IWorkspacePage {
  template: PageTemplates.BOARD
  id: number
  title: string
  isFavorite: boolean
  pageSettings: {
    isSmallText: boolean
    isFullWidth: boolean
    selectedFont: string
  }
  coverInfo: {
    isHasCover: boolean
    cover: CoverColors | string
    coverType: string
  }
  iconInfo: {
    isHasIcon: boolean
    icon: string
  }
  commentsInfo: {
    isHasComments: boolean
    comments: IComment[] | []
  }
}

interface IPageHistoryNote {
  userName: string
  title: string
  icon: string
  updated: string //!
  deleted: string //!
}

interface IPageOptions {
  isFullWidth: boolean
  isFavorite: boolean
  isSmallText: boolean
  history: IPageHistoryNote[]
}

interface WorkspaceSliceState {
  pages: IWorkspacePage[] | []
  currentPage: IWorkspacePage
  lastPage: IWorkspacePage | null
  recentlyDeleted: IWorkspacePage[] | []
}

interface SetPageFontPayloadAction {
  id: number
  fontFamily: string
}

export type {
  WorkspaceSliceState,
  BoardPageDefaultParams,
  TaskListPageDefaultParams,
  IWorkspacePage,
  IComment,
  SetPageFontPayloadAction,
}
