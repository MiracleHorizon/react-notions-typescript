import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ElementCoords } from 'types'
import { INotionPage } from 'redux/types'
import {
  PageOptionsEnum,
  PageTemplates,
  PopupsState,
  RenamableEntity,
} from './types'

const initialState: PopupsState = {
  appSettingsPopup: {
    isOpen: false,
  },
  pageIconPopup: {
    isOpen: false,
    coords: {},
    page: {} as INotionPage,
  },
  pageCoverPopup: {
    isOpen: false,
    coords: {},
    page: {} as INotionPage,
  },
  renamePopup: {
    isOpen: false,
    coords: {},
    entity: {} as INotionPage,
  },
  movePagePopup: {
    isOpen: false,
    coords: {},
    entity: {} as INotionPage,
  },
  commentOptionsPopup: {
    isOpen: false,
    coords: {},
    commentId: '',
  },
  pageOptionsPopup: {
    isOpen: false,
    options: [],
    coords: {},
    page: {} as INotionPage,
  },
  pageSettingsPopup: {
    isOpen: false,
    pageTemplate: PageTemplates.BOARD,
  },
  contentOptionsPopup: {
    isOpen: false,
    coords: {},
    itemIndex: -1,
  },
  contentStylesPopup: {
    isOpen: false,
    coords: {},
    itemIndex: -1,
  },
  contentTypesPopup: {
    isOpen: false,
    coords: {},
    itemId: '',
  },
  isQuickSearchPopupOpen: false,
  isPagesTrashPopupOpen: false,
  isPageCustomizePopupOpen: false,
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
    setPageOptionsPage(state, action: PayloadAction<INotionPage>) {
      state.pageOptionsPopup.page = action.payload
    },
    setRenamePopupEntity(state, action: PayloadAction<INotionPage>) {
      state.renamePopup.entity = action.payload
    },
    setRenamePopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.renamePopup.coords = action.payload
    },
    setChangeIconPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.pageIconPopup.coords = action.payload
    },
    setChangeCoverPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.pageCoverPopup.coords = action.payload
    },
    setMovePagePopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.movePagePopup.coords = action.payload
    },
    setMovePagePopupEntity(state, action: PayloadAction<INotionPage | any>) {
      //!
      state.movePagePopup.entity = action.payload
    },
    setCommentOptionsPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.commentOptionsPopup.coords = action.payload
    },
    setCommentOptionsPopupId(state, action: PayloadAction<string>) {
      state.commentOptionsPopup.commentId = action.payload
    },
    setChangeCoverPopupPage(state, action: PayloadAction<INotionPage>) {
      state.pageCoverPopup.page = action.payload
    },
    setChangeIconPopupPage(state, action: PayloadAction<INotionPage>) {
      state.pageIconPopup.page = action.payload
    },
    setContentOptionsPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.contentOptionsPopup.coords = action.payload
    },
    setContentOptionsPopupItem(state, action: PayloadAction<number>) {
      state.contentOptionsPopup.itemIndex = action.payload
    },
    setContentStylesPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.contentStylesPopup.coords = action.payload
    },
    setContentStylesPopupItem(state, action: PayloadAction<number>) {
      state.contentStylesPopup.itemIndex = action.payload
    },
    setContentTypesPopupCoords(state, action: PayloadAction<ElementCoords>) {
      state.contentTypesPopup.coords = action.payload
    },
    setContentTypesPopupItem(state, action: PayloadAction<string>) {
      state.contentTypesPopup.itemId = action.payload
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
    openCommentOptionsPopup(state) {
      state.commentOptionsPopup.isOpen = true
    },
    openPageCustomizePopup(state) {
      state.isPageCustomizePopupOpen = true
    },
    openContentOptionsPopup(state) {
      state.contentOptionsPopup.isOpen = true
    },
    openContentStylesPopup(state) {
      state.contentStylesPopup.isOpen = true
    },
    openContentTypesPopup(state) {
      state.contentTypesPopup.isOpen = true
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
    closeCommentOptionsPopup(state) {
      state.commentOptionsPopup.isOpen = false
      state.commentOptionsPopup.coords = {}
    },
    closePageCustomizePopup(state) {
      state.isPageCustomizePopupOpen = false
    },
    closeContentStylesPopup(state) {
      state.contentStylesPopup.isOpen = false
      state.contentStylesPopup.coords = {}
    },
    closeContentOptionsPopup(state) {
      state.contentOptionsPopup.isOpen = false
    },
    closeContentTypesPopup(state) {
      state.contentTypesPopup.isOpen = false
    },
  },
})

export const {
  setPageOptions,
  setPageOptionsPage,
  setRenamePopupEntity,
  setRenamePopupCoords,
  setPageOptionsPopupCoords,
  setMovePagePopupCoords,
  setMovePagePopupEntity,
  setChangeIconPopupCoords,
  setChangeCoverPopupCoords,
  setCommentOptionsPopupCoords,
  setCommentOptionsPopupId,
  setChangeCoverPopupPage,
  setChangeIconPopupPage,
  setContentOptionsPopupCoords,
  setContentOptionsPopupItem,
  setContentStylesPopupCoords, //!
  setContentTypesPopupItem,
  setContentTypesPopupCoords,
  setContentStylesPopupItem,
  openAppSettingsPopup,
  openPageOptionsPopup,
  openPageSettingsPopup,
  openPagesTrashPopup,
  openRenamePopup,
  openChangeIconPopup,
  openChangeCoverPopup,
  openQuickSearchPopup,
  openMovePagePopup,
  openCommentOptionsPopup,
  openPageCustomizePopup,
  openContentOptionsPopup,
  openContentStylesPopup,
  openContentTypesPopup,
  closeAppSettingsPopup,
  closePageOptionsPopup,
  closePageSettingsPopup,
  closePagesTrashPopup,
  closeRenamePopup,
  closeChangeIconPopup,
  closeChangeCoverPopup,
  closeQuickSearchPopup,
  closeMovePagePopup,
  closeCommentOptionsPopup,
  closePageCustomizePopup,
  closeContentOptionsPopup,
  closeContentStylesPopup,
  closeContentTypesPopup,
} = popupsSlice.actions

export default popupsSlice.reducer
