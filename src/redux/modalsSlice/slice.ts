import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppModalsState, PageOptionsEnum } from './types'
import { ElementCoords } from '../../@types/generalTypes'

const initialState: AppModalsState = {
  isChangePageTitleModalOpen: false,
  isQuickSearchModalOpen: false,
  isPagesTrashModalOpen: false,
  isChangePageIconPopupOpen: false,
  movePageToPopup: {
    isOpen: false,
    coords: {},
  },
  pageOptionsPopup: {
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
    setPageOptionsModalCoords(state, action: PayloadAction<ElementCoords>) {
      state.pageOptionsPopup.coords = action.payload
    },
    setPageOptions(state, action: PayloadAction<PageOptionsEnum>) {
      state.pageOptionsPopup.options = action.payload
    },
    setPageOptionsId(state, action: PayloadAction<number>) {
      state.pageOptionsPopup.pageId = action.payload
    },
    openPageOptionsModal(state) {
      state.pageOptionsPopup.isOpen = true
    },
    closePageOptionsModal(state) {
      state.pageOptionsPopup.isOpen = false
    },
    openPagesTrashModal(state) {
      state.isPagesTrashModalOpen = true
    },
    closePagesTrashModal(state) {
      state.isPagesTrashModalOpen = false
    },
    openChangePageTitlePopup(state) {
      state.isChangePageTitleModalOpen = true
    },
    closeChangePageTitlePopup(state) {
      state.isChangePageTitleModalOpen = false
    },
    openChangePageIconPopup(state) {
      state.isChangePageIconPopupOpen = true
    },
    closeChangePageIconPopup(state) {
      state.isChangePageIconPopupOpen = false
    },
    openQuickSearchModal(state) {
      state.isQuickSearchModalOpen = true
    },
    closeQuickSearchModal(state) {
      state.isQuickSearchModalOpen = false
    },
    setMovePageToPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.movePageToPopup.coords = action.payload
    },
    openMovePageToModal(state) {
      state.movePageToPopup.isOpen = true
    },
    closeMovePageToModal(state) {
      state.movePageToPopup.isOpen = false
      state.movePageToPopup.coords = {}
    },
  },
})

export const {
  setPageOptionsModalCoords,
  setPageOptions,
  setPageOptionsId,
  openPageOptionsModal,
  closePageOptionsModal,
  openPagesTrashModal,
  closePagesTrashModal,
  openChangePageTitlePopup,
  closeChangePageTitlePopup,
  openChangePageIconPopup,
  closeChangePageIconPopup,
  openQuickSearchModal,
  closeQuickSearchModal,
  setMovePageToPopupCoords,
  openMovePageToModal,
  closeMovePageToModal,
} = modalsSlice.actions

export default modalsSlice.reducer
