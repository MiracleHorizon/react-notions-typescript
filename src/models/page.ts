import { IListContentItem } from 'models/content/content.types'

export declare namespace NotionPage {
  export enum PageTemplates {
    LIST = 'LIST',
    TASK_LIST = 'Task list',
  }

  export type TPageFont = 'Default' | 'Serif' | 'Mono'

  export type DependentPageId = string

  export type UserId = string

  export interface PageSettings {
    isExpanded: boolean
    isFullWidth: boolean
    isSmallText: boolean
    selectedFont: TPageFont
  }

  export interface CoverInfo {
    isHasCover: boolean
    coverUrl: string
  }

  export interface IconInfo {
    isHasIcon: boolean
    iconUrl: string
  }

  export interface IComment {
    _id: string
    title: string
    createdAt: string
    updatedAt: string
    isResolved: boolean
    isEdited: boolean
    isNowEditing: boolean
    author: UserId
  }

  export interface CommentsInfo {
    isHasComments: boolean
    isHasResolvedComments: boolean
    comments: IComment[] | []
    resolvedComments: IComment[] | []
  }

  export interface INotionPage {
    _id: string
    parentPageId?: string | null //!
    title: string
    content: IListContentItem[] | [] // | ...
    isFavorite: boolean
    isHasDependentPages: boolean
    template: PageTemplates
    pageSettings: PageSettings
    coverInfo: CoverInfo
    iconInfo: IconInfo
    commentsInfo: CommentsInfo
    dependencies: DependentPageId[]
    createdAt: string
    updatedAt: string
    author: UserId
  }
}
