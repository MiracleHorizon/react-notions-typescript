import { RootState } from '../store'

const recentPagesSelector = (state: RootState) => state.quickSearch.recentPages
const recentSearchesSelector = (state: RootState) =>
  state.quickSearch.recentSearches

export { recentPagesSelector, recentSearchesSelector }
