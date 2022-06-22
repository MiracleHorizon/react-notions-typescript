import { createSlice } from '@reduxjs/toolkit'

import { IWorkspaceSliceState } from './types'

const initialState: IWorkspaceSliceState = {
  pages: [
    { id: 1, pageTitle: 'React + TypeScript', isFavorite: true },
    { id: 2, pageTitle: 'Redux + TypeScript', isFavorite: false },
    { id: 3, pageTitle: 'React', isFavorite: true },
    { id: 4, pageTitle: 'Redux', isFavorite: true },
    { id: 5, pageTitle: 'NodeJS', isFavorite: false },
    { id: 6, pageTitle: 'Angular', isFavorite: false },
    { id: 7, pageTitle: 'Vue 3', isFavorite: true },
  ],
  currentPage: { id: 7, pageTitle: 'Vue 3', isFavorite: true },
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
      state.currentPage.pageTitle = action.payload
      // action.payload === ''
      //   ? (state.currentPage.pageTitle = 'Untitled')
      //   : (state.currentPage.pageTitle = action.payload)
    },
    toggleFavorite(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (page) {
        page.isFavorite = !page.isFavorite
        state.currentPage.isFavorite = !state.currentPage.isFavorite
      }
    },
  },
})

export const { setCurrentPage, toggleFavorite, setCurrentPageTitle } =
  workSpaceSlice.actions

export default workSpaceSlice.reducer
