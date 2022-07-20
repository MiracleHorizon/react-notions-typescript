import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoadingStatuses } from 'api/types'
import { IWorkspacePage, WorkspaceSliceState } from './types'

const initialState: WorkspaceSliceState = {
  parentPages: [],
  pages: [],
  currentPage: {} as IWorkspacePage,
  lastPage: null,
  recentlyDeleted: [],
  loadingStatuses: {
    pageLoadingStatus: LoadingStatuses.IDLE,
    pagesListLoadingStatus: LoadingStatuses.IDLE,
    pagesTrashLoadingStatus: LoadingStatuses.IDLE,
    newPageLoadingStatus: LoadingStatuses.IDLE,
    pageIconLoadingStatus: LoadingStatuses.IDLE,
  },
}

export const workSpaceSlice = createSlice({
  name: 'workspace',

  initialState: initialState,

  reducers: {
    duplicatePage(state, action: PayloadAction<string>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      const pageDuplicate = JSON.parse(JSON.stringify(page))
      pageDuplicate.title = `${pageDuplicate.title} (1)`
      pageDuplicate.id = Math.random()

      state.pages = [...state.pages, pageDuplicate]
    },
    setCurrentPage(state, action: PayloadAction<string>) {
      const page = state.pages.find(page => page.id === action.payload)

      if (!page) return

      state.lastPage = state.currentPage
      state.currentPage = page
      state.currentPage.commentsInfo.comments.forEach(comment => {
        comment.isNowEditing = false
      })
    },
    setAllCurrentCommentsResolve(state) {
      state.currentPage.commentsInfo.comments = []
      state.currentPage.commentsInfo.isHasComments = false
    },
  },
})

export const { duplicatePage, setCurrentPage, setAllCurrentCommentsResolve } =
  workSpaceSlice.actions

export default workSpaceSlice.reducer
