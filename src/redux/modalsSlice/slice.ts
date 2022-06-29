import { createSlice } from '@reduxjs/toolkit'
import { IAppModalsState } from './types'

const initialState: IAppModalsState = {
  isChangePageTitleModalOpen: false,
  isQuickSearchModalOpen: false,
  isFavoritePagesOptionsModalOpen: false,
  isCommonPagesOptionsModalOpen: false,
}

export const modalsSlice = createSlice({
  name: 'modals',

  initialState: initialState,

  reducers: {
    openChangePageTitleModal(state) {
      state.isChangePageTitleModalOpen = true
    },
    openQuickSearchModal(state) {
      state.isQuickSearchModalOpen = true
    },
    openFavoritePagesOptionsModal(state) {
      state.isFavoritePagesOptionsModalOpen = true
    },
    openCommonPagesOptionsModal(state) {
      state.isCommonPagesOptionsModalOpen = true
    },
    closeChangePageTitleModal(state) {
      state.isChangePageTitleModalOpen = false
    },
    closeQuickSearchModal(state) {
      state.isQuickSearchModalOpen = false
    },
    closeFavoritePagesOptionsModal(state) {
      state.isFavoritePagesOptionsModalOpen = false
    },
    closeCommonPagesOptionsModal(state) {
      state.isCommonPagesOptionsModalOpen = false
    },
  },
})

export const {
  openChangePageTitleModal,
  openQuickSearchModal,
  openFavoritePagesOptionsModal,
  openCommonPagesOptionsModal,
  closeChangePageTitleModal,
  closeQuickSearchModal,
  closeFavoritePagesOptionsModal,
  closeCommonPagesOptionsModal,
} = modalsSlice.actions

export default modalsSlice.reducer
