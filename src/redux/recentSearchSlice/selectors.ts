import { RootState } from '../store'

const recentPagesSelector = (state: RootState) => state.recentSearch.pages
const recentSearchesSelector = (state: RootState) => state.recentSearch.searches

export { recentPagesSelector, recentSearchesSelector }
