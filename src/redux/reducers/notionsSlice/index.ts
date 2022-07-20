import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import NotionsState, { INotionPage } from './types'
import { LoadingStatuses } from 'api/types'
import {
  createNewPage,
  deletePage,
  getAllPages,
  updatePage,
} from 'api/reduxAsyncThunks'

const initialState: NotionsState = {
  pages: [],
  currentPage: {} as INotionPage,
  loadingStatus: LoadingStatuses.IDLE,
  updatingLoadingStatus: LoadingStatuses.IDLE,
}

export const notionsSlice = createSlice({
  name: 'notions',

  initialState: initialState,

  reducers: {
    renamePage(state, action: PayloadAction<{ _id: string; title: string }>) {
      const { _id, title } = action.payload
      const page = state.pages.find(page => page._id === _id)
      if (!page) return

      if (page._id === state.currentPage._id) {
        state.currentPage.title = title
      }

      page.title = title
    },
  },

  extraReducers: builder => {
    builder.addCase(getAllPages.pending, state => {
      state.pages = []
      state.loadingStatus = LoadingStatuses.PENDING
    })
    builder.addCase(getAllPages.fulfilled, (state, action) => {
      state.pages = action.payload
      state.currentPage = action.payload[1]
      state.loadingStatus = LoadingStatuses.SUCCEEDED
    })
    builder.addCase(getAllPages.rejected, (state, action) => {
      state.pages = []
      state.loadingStatus = LoadingStatuses.REJECTED

      console.error(action.error)
    })

    builder.addCase(createNewPage.fulfilled, (state, action) => {
      state.pages = [...state.pages, action.payload]
      state.currentPage = action.payload
    })
    builder.addCase(createNewPage.rejected, (state, action) => {
      console.error(action.error)
    })

    builder.addCase(updatePage.fulfilled, (state, action) => {
      const { _id, updatedPage } = action.payload
      const page = state.pages.find(page => page._id === _id)
      if (!page) return

      updatedPage._id = _id
      if (state.currentPage._id === _id) state.currentPage = updatedPage
      state.pages[state.pages.indexOf(page)] = updatedPage
    })
    builder.addCase(updatePage.rejected, (state, action) => {
      console.error(action.error)
    })

    builder.addCase(deletePage.fulfilled, (state, action) => {
      state.pages = state.pages.filter(page => page._id !== action.payload)
    })
    builder.addCase(deletePage.rejected, (state, action) => {
      console.error(action.error)
    })
  },
})

export const { renamePage } = notionsSlice.actions

export default notionsSlice.reducer
