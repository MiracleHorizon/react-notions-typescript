import { IWorkspacePage } from 'redux/workSpaceSlice/types'
import { ActiveItemParams } from '../../../../@types/generalTypes'

export default interface DeletedPagesListProps extends ActiveItemParams {
  list: [] | IWorkspacePage[]
  filterValue?: string
}
