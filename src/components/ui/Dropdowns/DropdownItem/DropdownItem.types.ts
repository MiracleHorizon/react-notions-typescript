import { ActiveListItem } from 'types'
import { CommentsFilters } from 'redux/reducers/sidebarsSlice/types'

export default interface DropdownItemProps extends ActiveListItem {
  title: CommentsFilters
  description: string
  activeFilter: CommentsFilters
  onClick: (filter: CommentsFilters) => void
}
