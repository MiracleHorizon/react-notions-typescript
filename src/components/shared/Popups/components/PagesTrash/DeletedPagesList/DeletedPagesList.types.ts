import { IWorkspacePage } from 'redux/reducers/workSpaceSlice/types'

export default interface DeletedPagesListProps {
  list: [] | IWorkspacePage[]
  filterValue?: string
}
