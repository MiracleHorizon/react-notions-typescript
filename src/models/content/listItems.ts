import { ContentTypes } from './content.types'
import { IComment, IconInfo } from 'redux/types'

export namespace ListItems {
  // Declaring supporting types.
  export type THeadingLevel = '1' | '2' | '3'

  type TDependencies = [] | ListItem[]

  // Declaring supporting item types.
  export interface DefaultItem  {
    _id?: string
    parent: string | null
    contentType: ContentTypes
  }

  interface ToggleItem extends DefaultItem {
    isExpanded: boolean
    dependencies: TDependencies
  }

  interface ListItem extends DefaultItem {
    position: number
  }

  export interface List extends DefaultItem {
    dependencies: TDependencies
  }

  // Declaring types of list-notion template content items.
  export type Text = DefaultItem

  export interface Page extends DefaultItem {
    parentPageId: string | null
    pageId: string
    title: string
    iconInfo: IconInfo
  }

  export interface Todo extends DefaultItem {
    isCompleted: boolean
  }

  export type ToggleList = ToggleItem

  export interface Image extends DefaultItem {}

  export interface Video extends DefaultItem {}
}
