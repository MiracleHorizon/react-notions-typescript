import { CoverColors, PageFontFamilies } from 'redux/workSpaceSlice/types'
import { PageTemplates } from 'redux/popupsSlice/types'

interface CoverInfo {
  isHasCover: boolean
  cover: string | CoverColors | null
}

interface IconInfo {
  isHasIcon: boolean
  icon: string | null
}

interface CommentsInfo {
  isHasComments: boolean
  comments: [] | CommentParams[]
}

interface CommentParams {
  comment: string
  readonly author: string
  readonly createDate: Date
}

interface DefaultPageParams {
  id: number
  title: string
  coverInfo: CoverInfo
  iconInfo: IconInfo
  commentsInfo: CommentsInfo
  isFavorite: boolean
}

interface DefaultBoardPageParams extends DefaultPageParams {
  template: PageTemplates.BOARD
  pageSettings: {
    isFullWidth: boolean
    isSmallText: boolean
    selectedFontFamily: PageFontFamilies
  }
}
interface DefaultTaskListPageParams extends DefaultPageParams {}
interface DefaultCalendarPageParams extends DefaultPageParams {}
interface DefaultTablePageParams extends DefaultPageParams {}

export type {
  CoverInfo,
  IconInfo,
  CommentsInfo,
  CommentParams,
  DefaultPageParams,
  DefaultBoardPageParams,
  DefaultTaskListPageParams,
  DefaultCalendarPageParams,
  DefaultTablePageParams,
}
