import {
  PageTemplates,
  CommentsInfo,
  CoverInfo,
  DependentPageId,
  IconInfo,
  PageSettings,
  INotionPage,
} from 'redux/types'

export type ParentPageId = string

export interface NewPageParams {
  _id?: ParentPageId
}

export interface UpdatePageParams {
  _id: string
  updatedPage: INotionPage
}

//TODO export type UpdatePageParams = INotionPage

export interface PagePatchParams {
  readonly _id: string
  parentPageId?: string | null
  title?: string
  template?: PageTemplates
  content?: []
  isFavorite?: boolean
  isHasDependentPages?: boolean
  pageSettings?: PageSettings
  coverInfo?: CoverInfo
  iconInfo?: IconInfo
  commentsInfo?: CommentsInfo
  dependencies?: DependentPageId[]
  createdAt?: string
  updatedAt?: string
}
