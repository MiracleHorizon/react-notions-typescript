import { ActiveItemParams } from 'types'
import { IRecentPage } from 'redux/quickSearchSlice/types'
import { IconInfo } from '../../../PageTemplates/NewPage/types'

interface IRecentPageItem extends ActiveItemParams {
  id: number
  title: string
  iconInfo: IconInfo
}

interface IRecentSearchItem extends ActiveItemParams {
  id: number
  title: string
}

export default interface RecentPagesListProps extends ActiveItemParams {
  listTitle: string
  list: IRecentPage[]
}

export type { IRecentPageItem, IRecentSearchItem }
