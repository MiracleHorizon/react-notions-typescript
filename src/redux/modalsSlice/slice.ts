import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppModalsState } from './types'
import { IElementCoords } from '../../@types/types'

const initialState: IAppModalsState = {
  isChangePageTitleModalOpen: false,
  isQuickSearchModalOpen: false,
  isMovePageToModalOpen: false,
  pageOptionsModal: {
    isOpen: false,
    coords: {},
  },
}

export const modalsSlice = createSlice({
  name: 'modals',

  initialState: initialState,

  reducers: {
    setCommonItemCoords(state, action: PayloadAction<IElementCoords>) {
      state.pageOptionsModal.coords = action.payload
    },
    openPageOptionsModal(state) {
      state.pageOptionsModal.isOpen = true
    },
    closePageOptionsModal(state) {
      state.pageOptionsModal.isOpen = false
    },
    openChangePageTitleModal(state) {
      state.isChangePageTitleModalOpen = true
    },
    openQuickSearchModal(state) {
      state.isQuickSearchModalOpen = true
    },
    openMovePageToModal(state) {
      state.isMovePageToModalOpen = true
    },
    closeChangePageTitleModal(state) {
      state.isChangePageTitleModalOpen = false
    },
    closeQuickSearchModal(state) {
      state.isQuickSearchModalOpen = false
    },
    closeMovePageToModal(state) {
      state.isMovePageToModalOpen = false
    },
  },
})

export const {
  setCommonItemCoords,
  openPageOptionsModal,
  closePageOptionsModal,
  openChangePageTitleModal,
  openQuickSearchModal,
  openMovePageToModal,
  closeChangePageTitleModal,
  closeQuickSearchModal,
  closeMovePageToModal,
} = modalsSlice.actions

export default modalsSlice.reducer
