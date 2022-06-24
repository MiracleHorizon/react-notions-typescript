import { createSlice } from '@reduxjs/toolkit'

import { IWorkspaceSliceState } from './types'
import vue3Svg from '../../assets/img/technologies/vue3.svg' //!

const initialState: IWorkspaceSliceState = {
  pages: [
    {
      id: 1,
      pageTitle: 'React + TypeScript',
      isFavorite: true,
      pageImg: `${vue3Svg}`,
    },
    {
      id: 2,
      pageTitle: 'Redux + TypeScript',
      isFavorite: false,
      pageImg: `${vue3Svg}`,
    },
    { id: 3, pageTitle: 'React', isFavorite: true, pageImg: `${vue3Svg}` },
    { id: 4, pageTitle: 'Redux', isFavorite: true, pageImg: `${vue3Svg}` },
    { id: 5, pageTitle: 'NodeJS', isFavorite: false, pageImg: `${vue3Svg}` },
    { id: 6, pageTitle: 'Angular', isFavorite: false, pageImg: `${vue3Svg}` },
    { id: 7, pageTitle: 'Vue 3', isFavorite: true, pageImg: `${vue3Svg}` },
  ],
  currentPage: {
    id: 7,
    pageTitle: 'Vue 3',
    isFavorite: true,
    pageImg: `${vue3Svg}`,
  },
}

export const workSpaceSlice = createSlice({
  name: 'workspace',

  initialState: initialState,

  reducers: {
    setCurrentPage(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (page) state.currentPage = page
    },
    setCurrentPageTitle(state, action) {
      const [pageTitle, pageId] = action.payload
      const page = state.pages.find(page => page.id === pageId)

      if (!page) return
      state.currentPage.pageTitle = pageTitle
      page.pageTitle = pageTitle
    },
    toggleFavorite(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (!page) return
      state.currentPage.isFavorite = !state.currentPage.isFavorite
      page.isFavorite = !page.isFavorite
    },
  },
})

export const { setCurrentPage, toggleFavorite, setCurrentPageTitle } =
  workSpaceSlice.actions

export default workSpaceSlice.reducer

// if (pageTitle === '') {
//   state.currentPage.pageTitle = 'Untitled'
//   page.pageTitle = 'Untitled'
// } else {
//   state.currentPage.pageTitle = pageTitle
//   page.pageTitle = pageTitle
// }
