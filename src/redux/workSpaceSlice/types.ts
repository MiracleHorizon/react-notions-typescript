import { PageTemplates } from '../popupsSlice/types'
import { LoadingStatuses } from '../../api/types'

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

export enum PageFontFamilies {
  DEFAULT = `ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI,
  Helvetica, Apple Color Emoji, Arial, sans-serif, 
  Segoe UI Emoji,Segoe UI Symbol`,
  SERIF = 'Lyon-Text, Georgia, ui-serif, serif',
  MONO = 'iawriter-mono, Nitti, Menlo, Courier, monospace',
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
// | 'Default' | 'Serif' | 'Mono'
interface IWorkspacePage {
  template: PageTemplates.BOARD | 'Board' | 'TaskList'
  id: number
  title: string
  isFavorite: boolean
  pageSettings: {
    isSmallText: boolean
    isFullWidth: boolean
    selectedFont: PageFontFamilies
  }
  coverInfo: {
    isHasCover: boolean
    cover: CoverColors | string
    coverType: 'imgUrl' | 'CoverColors' | ''
  }
  iconInfo: {
    isHasIcon: boolean
    icon: string
  }
  commentsInfo: {
    isHasComments: boolean
    comments: IComment[] | []
  }
  dependentPages?: {
    isHasDependentPages: boolean
    pages: IWorkspacePage[]
  }
  history?: IPageHistoryNote
}

interface IPageHistoryNote {
  userName: string
  title: string
  icon: string
  updated: string //!
  deleted: string //!
}

interface WorkspaceSliceState {
  pages: IWorkspacePage[] | []
  currentPage: IWorkspacePage
  lastPage: IWorkspacePage | null
  recentlyDeleted: IWorkspacePage[] | []
  recentPages: IWorkspacePage | []
  loadingStatus: LoadingStatuses
}

interface SetPageFontPayloadAction {
  id: number
  fontFamily: PageFontFamilies
}

export type {
  WorkspaceSliceState,
  BoardPageDefaultParams,
  TaskListPageDefaultParams,
  IWorkspacePage,
  IComment,
  SetPageFontPayloadAction,
}
