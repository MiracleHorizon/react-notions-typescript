import { ActiveListItem } from '../../../../../../../@types/types'
import { CommentsFilters } from 'redux/sidebarsSlice/types'

interface DropdownItemProps extends ActiveListItem {
  title: CommentsFilters
  description: string
  onClick: (filter: CommentsFilters) => void
}

export type { DropdownItemProps }
