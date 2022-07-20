import { PageTemplates } from '../popupsSlice/types'
import { LoadingStatuses } from 'api/types'

interface IComment {
  id: string
  title: string
  createDateInfo: {
    date: string
    time: string
  }
  isNowEditing: boolean
  isResolved: boolean
  isEdited: boolean
}

interface CommentsList {
  id: string
  list: IComment[]
}

interface IWorkspacePage {
  template: 'Board' | 'TaskList'
  id: string
  title: string
  isFavorite: boolean
  isParent: boolean
  isChild: boolean
  pageSettings: {
    isSmallText: boolean
    isFullWidth: boolean
    // selectedFont: TPageFont
  }
  coverInfo: {
    isHasCover: boolean
    cover: string
    coverType: string
  }
  iconInfo: {
    isHasIcon: boolean
    icon: string
  }
  commentsInfo: {
    isHasComments: boolean
    comments: IComment[] | []
    resolvedComments: CommentsList[]
  }
  dependentPages: {
    isHasDependentPages: boolean
    pages: IWorkspacePage[]
  }
  history: IPageHistoryNote
}

interface IPageHistoryNote {
  userName: string
  title: string
  icon: string
  updated: string
  deleted: string
}

interface LoadingStatusesState {
  pageLoadingStatus: LoadingStatuses
  pagesListLoadingStatus: LoadingStatuses
  pagesTrashLoadingStatus: LoadingStatuses
  newPageLoadingStatus: LoadingStatuses
  pageIconLoadingStatus: LoadingStatuses
}

interface WorkspaceSliceState {
  parentPages: IWorkspacePage[] | []
  pages: IWorkspacePage[] | []
  currentPage: IWorkspacePage
  lastPage: IWorkspacePage | null
  recentlyDeleted: IWorkspacePage[] | []
  loadingStatuses: LoadingStatusesState
}

export type { WorkspaceSliceState, IWorkspacePage, CommentsList }
