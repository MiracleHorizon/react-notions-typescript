import { IWorkspacePage } from 'redux/workSpaceSlice/types'

export default interface DeletedPagesListProps {
  list: [] | IWorkspacePage[]
  filterValue?: string
}
