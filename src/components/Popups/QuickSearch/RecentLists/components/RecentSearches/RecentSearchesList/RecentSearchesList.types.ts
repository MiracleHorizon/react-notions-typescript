import { RecentSearchItem } from 'redux/quickSearchSlice/types'
import { ActiveItemParams } from '../../../../../../../types'

export default interface RecentSearchesListProps extends ActiveItemParams {
  listTitle: string
  list: RecentSearchItem[]
}
