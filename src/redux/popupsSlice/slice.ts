import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  PageOptionsEnum,
  PageTemplates,
  PopupsState,
  RenamableEssence,
} from './types'
import { ElementCoords } from '../../@types/generalTypes'

const initialState: PopupsState = {
  isQuickSearchModalOpen: false,
  isPagesTrashModalOpen: false,
  isChangePageIconPopupOpen: false,
  renamePopup: {
    isOpen: false,
    coords: {},
    essence: {
      id: -1,
      title: 'Untitled',
      iconInfo: {
        icon: '',
        isHasIcon: false,
      },
    },
  },
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
  pageSettingsPopup: {
    isOpen: false,
    pageTemplate: PageTemplates.BOARD,
  },
}

export const modalsSlice = createSlice({
  name: 'popups',

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
      state.pageOptionsPopup.coords = {}
    },
    openPagesTrashModal(state) {
      state.isPagesTrashModalOpen = true
    },
    closePagesTrashModal(state) {
      state.isPagesTrashModalOpen = false
    },
    setRenamePopupEssence(state, action: PayloadAction<RenamableEssence>) {
      state.renamePopup.essence = action.payload
    },
    setRenamePopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.renamePopup.coords = action.payload
    },
    openRenamePopup(state) {
      state.renamePopup.isOpen = true
    },
    closeRenamePopup(state) {
      state.renamePopup.isOpen = false
      state.renamePopup.coords = {}
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
    openPageSettingsPopup(state) {
      state.pageSettingsPopup.isOpen = true
    },
    closePageSettingsPopup(state) {
      state.pageSettingsPopup.isOpen = false
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
  setRenamePopupEssence,
  setRenamePopupCoords,
  openRenamePopup,
  closeRenamePopup,
  openChangePageIconPopup,
  closeChangePageIconPopup,
  openQuickSearchModal,
  closeQuickSearchModal,
  setMovePageToPopupCoords,
  openMovePageToModal,
  closeMovePageToModal,
  openPageSettingsPopup,
  closePageSettingsPopup,
} = modalsSlice.actions

export default modalsSlice.reducer
