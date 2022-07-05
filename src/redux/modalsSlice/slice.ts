import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppModalsState, PageOptionsEnum } from './types'
import { IElementCoords } from '../../@types/generalTypes'

const initialState: IAppModalsState = {
  isChangePageTitleModalOpen: false,
  isQuickSearchModalOpen: false,
  isMovePageToModalOpen: false,
  isPagesTrashModalOpen: false,
  pageOptionsModal: {
    isOpen: false,
    options: [],
    coords: {},
    pageId: -1,
  },
}

export const modalsSlice = createSlice({
  name: 'modals',

  initialState: initialState,

  reducers: {
    setPageOptionsModalCoords(state, action: PayloadAction<IElementCoords>) {
      state.pageOptionsModal.coords = action.payload
    },
    setPageOptions(state, action: PayloadAction<PageOptionsEnum>) {
      state.pageOptionsModal.options = action.payload
    },
    setPageOptionsId(state, action: PayloadAction<number>) {
      state.pageOptionsModal.pageId = action.payload
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
  setPageOptionsId,
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
