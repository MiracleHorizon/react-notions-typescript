import { ActiveItemParams } from 'types'
import { RecentSearchItem } from 'redux/reducers/quickSearchSlice/types'

export default interface RecentSearchesListProps extends ActiveItemParams {
  listTitle: string
  list: RecentSearchItem[]
}
