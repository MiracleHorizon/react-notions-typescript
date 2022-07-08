import { ActiveListItem } from '../../../types'
import { CommentsFilters } from 'redux/sidebarsSlice/types'

interface DropdownItemProps extends ActiveListItem {
  title: CommentsFilters //!
  description: string
  activeFilter: CommentsFilters
  onClick: (filter: CommentsFilters) => void
}

export type { DropdownItemProps }
