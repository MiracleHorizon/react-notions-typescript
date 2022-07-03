import { PageTemplates } from '../popupsSlice/types'

enum CoverColors {
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

interface IWorkspacePage {
  id: number
  title: string
  icon: string | null
  cover: CoverColors | null
  template?: PageTemplates
  isSmallText: boolean
  isFullWidth: boolean
  isHasIcon: boolean
  isHasCover: boolean
  isHasComments: boolean
  isFavorite: boolean
  comments: IComment[] | []
  content?: {
    blocks: {
      block: {
        title: string
        content: {}
      }
    }
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
  options?: IPageOptions
}

export type { WorkspaceSliceState, IWorkspacePage, IComment }
export { CoverColors }
