interface RecentPageItem {
  title: string
  img: string
}

interface RecentSearchState {
  pages: RecentPageItem[]
  searches: string[]
}

export type { RecentSearchState }
