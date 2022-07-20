import { LoadingStatuses } from 'api/types'
import { IconInfo } from 'redux/types'

interface IRecentPage {
  id: string
  title: string
  iconInfo: IconInfo
}

interface RecentSearchItem {
  id: string
  title: string
}

interface RecentSearchState {
  recentPages: IRecentPage[]
  recentSearches: RecentSearchItem[]
  loadingStatus: LoadingStatuses
}

export type { RecentSearchState, RecentSearchItem, IRecentPage }
