import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppModalsState } from './types'
import { IElementCoords } from '../../@types/types'
import { IOptionItem } from '../optionsSlice/types'

const initialState: IAppModalsState = {
  isChangePageTitleModalOpen: false,
  isQuickSearchModalOpen: false,
  isMovePageToModalOpen: false,
  pageOptionsModal: {
    isOpen: false,
    options: [],
    coords: {},
  },
}

export const modalsSlice = createSlice({
  name: 'modals',

  initialState: initialState,

  reducers: {
    setPageOptionsModalCoords(state, action: PayloadAction<IElementCoords>) {
      state.pageOptionsModal.coords = action.payload
    },
    setPageOptions(state, action: PayloadAction<IOptionItem[]>) {
      state.pageOptionsModal.options = action.payload
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
  setPageOptionsModalCoords,
  setPageOptions,
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
