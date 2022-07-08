import { IconInfo } from 'components/PageTemplates/NewPage/types'

interface IRecentPage {
  id: number
  title: string
  iconInfo: IconInfo
}

interface RecentSearchItem {
  id: number
  title: string
}

interface RecentSearchState {
  recentPages: IRecentPage[]
  recentSearches: RecentSearchItem[]
}

export type { RecentSearchState, RecentSearchItem, IRecentPage }
