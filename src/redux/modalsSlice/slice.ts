import { createSlice } from '@reduxjs/toolkit'
import { IAppModalsState } from './types'

const initialState: IAppModalsState = {
  isChangePageTitleModalOpen: false,
  isQuickSearchModalOpen: false,
}

export const modalsSlice = createSlice({
  name: 'modals',

  initialState: initialState,

  reducers: {
    openChangePageTitleModal(state) {
      state.isChangePageTitleModalOpen = true
    },
    closeChangePageTitleModal(state) {
      state.isChangePageTitleModalOpen = false
    },
    openQuickSearchModal(state) {
      state.isQuickSearchModalOpen = true
    },
    closeQuickSearchModal(state) {
      state.isQuickSearchModalOpen = false
    },
  },
})

export const {
  openChangePageTitleModal,
  openQuickSearchModal,
  closeChangePageTitleModal,
  closeQuickSearchModal,
} = modalsSlice.actions

export default modalsSlice.reducer
