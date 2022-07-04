import { IWorkspacePage } from 'redux/workSpaceSlice/types'

enum ListItemOptions {
  FAVORITE = 'Remove, rename',
  COMMON = 'Delete, duplicate',
}

interface SidebarListItemProps {
  page: IWorkspacePage
}

export type { SidebarListItemProps }
export { ListItemOptions }
