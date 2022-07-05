import { IWorkspacePage } from 'redux/workSpaceSlice/types'
import { ActiveListItem } from '../../../../@types/generalTypes'

export default interface DeletedPagesListProps extends ActiveListItem {
  list: [] | IWorkspacePage[]
  filterValue?: string
}
