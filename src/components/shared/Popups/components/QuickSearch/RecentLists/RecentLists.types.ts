import { ActiveItemParams } from 'types'
import { IRecentPage } from 'redux/reducers/quickSearchSlice/types'
import { NotionPage } from 'models/page'
import IconInfo = NotionPage.IconInfo

export interface IRecentPageItem extends ActiveItemParams {
  id: string
  title: string
  iconInfo: IconInfo
}

export interface IRecentSearchItem extends ActiveItemParams {
  id: string
  title: string
}

export default interface RecentPagesListProps extends ActiveItemParams {
  listTitle: string
  list: IRecentPage[]
}
