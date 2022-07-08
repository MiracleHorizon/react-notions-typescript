import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRecentPage, RecentSearchState } from './types'

const initialState: RecentSearchState = {
  recentPages: [],
  recentSearches: [],
}

export const quickSearchSlice = createSlice({
  name: 'quickSearch',

  initialState: initialState,

  reducers: {
    addSearchesValue(state, action: PayloadAction<string>) {
      const searchValue = {
        title: action.payload,
        id: Math.random() * 100,
      }
      const isAlreadyContains = state.recentSearches.find(recentSearch => {
        return recentSearch.title === searchValue.title
      })

      if (state.recentSearches.length >= 3) state.recentSearches.shift()
      if (isAlreadyContains) return

      state.recentSearches.push(searchValue)
    },
    addRecentPage(state, action: PayloadAction<IRecentPage>) {
      const newPage = action.payload
      const isAlreadyContains = state.recentPages.find(
        page => page.id === newPage.id
      )

      if (state.recentPages.length >= 7) state.recentSearches.shift()
      if (isAlreadyContains) {
        state.recentPages = state.recentPages.filter(
          page => page.id !== newPage.id
        )
      }

      state.recentPages.push(newPage)
    },
    clearRecentPagesList(state) {
      state.recentPages = []
    },
    clearRecentSearchesList(state) {
      state.recentPages = []
    },
  },
})

export const {
  addRecentPage,
  addSearchesValue,
  clearRecentPagesList,
  clearRecentSearchesList,
} = quickSearchSlice.actions

export default quickSearchSlice.reducer
