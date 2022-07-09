import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  PageOptionsEnum,
  PageTemplates,
  PopupsState,
  RenamableEssence,
} from './types'
import { ElementCoords } from 'types'

const initialState: PopupsState = {
  appSettingsPopup: {
    isOpen: false,
  },
  pageIconPopup: {
    isOpen: false,
    coords: {},
  },
  pageCoverPopup: {
    isOpen: false,
  },
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
  movePagePopup: {
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
  isQuickSearchPopupOpen: false,
  isPagesTrashPopupOpen: false,
}

export const popupsSlice = createSlice({
  name: 'popups',

  initialState: initialState,

  reducers: {
    setPageOptionsPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.pageOptionsPopup.coords = action.payload
    },
    setPageOptions(state, action: PayloadAction<PageOptionsEnum>) {
      state.pageOptionsPopup.options = action.payload
    },
    setPageOptionsId(state, action: PayloadAction<number>) {
      state.pageOptionsPopup.pageId = action.payload
    },
    setRenamePopupEssence(state, action: PayloadAction<RenamableEssence>) {
      state.renamePopup.essence = action.payload
    },
    setRenamePopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.renamePopup.coords = action.payload
    },
    setChangeIconPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.pageIconPopup.coords = action.payload
    },
    setMovePagePopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.movePagePopup.coords = action.payload
    },

    openAppSettingsPopup(state) {
      state.appSettingsPopup.isOpen = true
    },
    openPageOptionsPopup(state) {
      state.pageOptionsPopup.isOpen = true
    },
    openPagesTrashPopup(state) {
      state.isPagesTrashPopupOpen = true
    },
    openRenamePopup(state) {
      state.renamePopup.isOpen = true
    },
    openChangeIconPopup(state) {
      state.pageIconPopup.isOpen = true
    },
    openQuickSearchPopup(state) {
      state.isQuickSearchPopupOpen = true
    },
    openMovePagePopup(state) {
      state.movePagePopup.isOpen = true
    },
    openPageSettingsPopup(state) {
      state.pageSettingsPopup.isOpen = true
    },
    openChangeCoverPopup(state) {
      state.pageCoverPopup.isOpen = true
    },

    closeAppSettingsPopup(state) {
      state.appSettingsPopup.isOpen = false
    },
    closePageOptionsPopup(state) {
      state.pageOptionsPopup.isOpen = false
      state.pageOptionsPopup.coords = {}
    },
    closePagesTrashPopup(state) {
      state.isPagesTrashPopupOpen = false
    },
    closeRenamePopup(state) {
      state.renamePopup.isOpen = false
      state.renamePopup.coords = {}
    },
    closeChangeIconPopup(state) {
      state.pageIconPopup.isOpen = false
    },
    closeQuickSearchPopup(state) {
      state.isQuickSearchPopupOpen = false
    },
    closeMovePagePopup(state) {
      state.movePagePopup.isOpen = false
      state.movePagePopup.coords = {}
    },
    closePageSettingsPopup(state) {
      state.pageSettingsPopup.isOpen = false
    },
    closeChangeCoverPopup(state) {
      state.pageCoverPopup.isOpen = false
    },
  },
})

export const {
  setPageOptions,
  setPageOptionsId,
  setRenamePopupEssence,
  setRenamePopupCoords,
  setPageOptionsPopupCoords,
  setMovePagePopupCoords,
  setChangeIconPopupCoords,
  openAppSettingsPopup,
  openPageOptionsPopup,
  openPageSettingsPopup,
  openPagesTrashPopup,
  openRenamePopup,
  openChangeIconPopup,
  openChangeCoverPopup,
  openQuickSearchPopup,
  openMovePagePopup,
  closeAppSettingsPopup,
  closePageOptionsPopup,
  closePageSettingsPopup,
  closePagesTrashPopup,
  closeRenamePopup,
  closeChangeIconPopup,
  closeChangeCoverPopup,
  closeQuickSearchPopup,
  closeMovePagePopup,
} = popupsSlice.actions

export default popupsSlice.reducer
