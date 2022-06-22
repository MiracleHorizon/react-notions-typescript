import { createSlice } from '@reduxjs/toolkit'
import { IPagesSliceState } from './types'

import searchSvg from '../../assets/img/search.svg'
import updatesSvg from '../../assets/img/updates.svg'
import settingSvg from '../../assets/img/settings.svg'

const initialState: IPagesSliceState = {
  userBarItems: [
    { title: 'Quick Find', imgUrl: `${searchSvg}` },
    { title: 'All Updates', imgUrl: `${updatesSvg}` },
    { title: 'Settings & Members', imgUrl: `${settingSvg}` },
  ],
  privatePages: ['React', 'Redux', 'React + TypeScript', 'Redux + TypeScript'],
  favoritePages: ['NodeJS', 'Angular', 'Vue 3'],
}

export const pagesSlice = createSlice({
  name: 'pages',

  initialState: initialState,

  reducers: {
    setPrivatePage(state, action) {
      state.privatePages = [...state.privatePages, action.payload]
    },
    setFavoritePage(state, action) {
      const newPage = action.payload

      state.privatePages = state.privatePages.filter(page => page !== newPage)
      state.favoritePages = [...state.favoritePages, newPage] // !
    },
  },
})

export const { setPrivatePage } = pagesSlice.actions

export default pagesSlice.reducer
