interface RecentPageItem {
  title: string
  img: string
}

interface RecentSearchesItem {
  title: string
  img?: string
}

interface RecentSearchState {
  pages: RecentPageItem[]
  searches: RecentSearchesItem[]
}

type RecentList = RecentPageItem[] | RecentSearchesItem[]

export type { RecentSearchState, RecentList }
