import { RootState } from 'redux/store'
import {
  RenamePopupState,
  MovePagePopupState,
  PageOptionsPopupState,
  PageSettingsPopupState,
  PageIconPopup,
  PageCoverPopup,
  CommentOptionsPopup,
  ContentStylesPopup,
  ContentOptionsPopup,
} from './types'

const appSettingsPopupSelector = (state: RootState): boolean => {
  return state.popups.appSettingsPopup.isOpen
}

const renamePopupSelector = (state: RootState): RenamePopupState => {
  return state.popups.renamePopup
}

const changeIconPopupSelector = (state: RootState): PageIconPopup => {
  return state.popups.pageIconPopup
}

const changeCoverPopupSelector = (state: RootState): PageCoverPopup => {
  return state.popups.pageCoverPopup
}

const movePagePopupSelector = (state: RootState): MovePagePopupState => {
  return state.popups.movePagePopup
}

const pageOptionsPopupSelector = (state: RootState): PageOptionsPopupState => {
  return state.popups.pageOptionsPopup
}

const pageSettingsPopupSelector = (
  state: RootState
): PageSettingsPopupState => {
  return state.popups.pageSettingsPopup
}

const commentOptionsPopupSelector = (state: RootState): CommentOptionsPopup => {
  return state.popups.commentOptionsPopup
}

const quickSearchPopupSelector = (state: RootState): boolean => {
  return state.popups.isQuickSearchPopupOpen
}

const pagesTrashPopupSelector = (state: RootState): boolean => {
  return state.popups.isPagesTrashPopupOpen
}

const pageCustomizePopupSelector = (state: RootState): boolean => {
  return state.popups.isPageCustomizePopupOpen
}

const contentOptionsPopupSelector = (state: RootState): ContentOptionsPopup => {
  return state.popups.contentOptionsPopup
}

const contentTypesPopupSelector = (state: RootState) => {
  return state.popups.contentTypesPopup
}

const contentStylesPopupSelector = (state: RootState): ContentStylesPopup => {
  return state.popups.contentStylesPopup
}

export {
  appSettingsPopupSelector,
  commentOptionsPopupSelector,
  renamePopupSelector,
  changeIconPopupSelector,
  changeCoverPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  quickSearchPopupSelector,
  pagesTrashPopupSelector,
  pageCustomizePopupSelector,
  contentOptionsPopupSelector,
  contentTypesPopupSelector,
  contentStylesPopupSelector,
}
