import { createSlice } from '@reduxjs/toolkit'
import { RecentSearchState } from './types'
import reactSvg from '../../assets/img/technologies/react.svg'

const initialState: RecentSearchState = {
  pages: [
    {
      title: 'React - Redux',
      img: reactSvg,
    },
    {
      title: 'React',
      img: reactSvg,
    },
    {
      title: 'TypeScript',
      img: reactSvg,
    },
    {
      title: 'NodeJS',
      img: reactSvg,
    },
    {
      title: 'Vue 3',
      img: reactSvg,
    },
  ],
  searches: [
    {
      title: 'zxc',
    },
    {
      title: 'cxz',
    },
    {
      title: 'wqe',
    },
  ],
}

export const recentSearchSlice = createSlice({
  name: 'recentSearch',

  initialState: initialState,

  reducers: {
    clearPagesList(state) {
      state.pages = []
    },
    clearSearchesList(state) {
      state.searches = []
    },
  },
})

export const { clearPagesList, clearSearchesList } = recentSearchSlice.actions

export default recentSearchSlice.reducer
