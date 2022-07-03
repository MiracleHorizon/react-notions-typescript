import { ActiveListItem } from '../../../../../../../@types/types'
import { CommentsFilters } from 'redux/sidebarsSlice/types'

interface DropdownItemProps extends ActiveListItem {
  title: CommentsFilters
  description: string
  activeCommentsFilter: CommentsFilters
  onClick: (filter: CommentsFilters) => void
}

export type { DropdownItemProps }
