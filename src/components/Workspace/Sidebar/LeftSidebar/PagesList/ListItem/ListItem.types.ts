import { IWorkspacePage } from 'redux/workSpaceSlice/types'

export enum ListItemOptions {
  FAVORITE = 'Remove, rename',
  COMMON = 'Delete, duplicate',
}

export default interface SidebarListItemProps {
  page: IWorkspacePage
}
