import { RootState } from 'redux/store'

export const recentPagesSelector = (state: RootState) =>
  state.quickSearch.recentPages

export const recentSearchesSelector = (state: RootState) =>
  state.quickSearch.recentSearches
