import { INotionPage } from 'redux/types'

export default interface SidebarListItemProps {
  page: INotionPage
  paddingLeft: number
}

export enum ListItemOptions {
  FAVORITE = 'Remove, rename',
  COMMON = 'Delete, duplicate',
}

export interface ItemContainerProps {
  isSelected: boolean
  isHovering: boolean
  isExpanded: boolean
  paddingLeft: number
}
