import { RootState } from '../store'
import {
  RenamePopupState,
  MovePageToPopupState,
  PageOptionsPopupState,
  PageSettingsPopupState,
} from './types'

const renamePopupSelector = (state: RootState): RenamePopupState => {
  return state.popups.renamePopup
}
const changePageIconPopupSelector = (state: RootState): boolean => {
  return state.popups.isChangePageIconPopupOpen
}
const quickSearchPopupSelector = (state: RootState): boolean => {
  return state.popups.isQuickSearchModalOpen
}
const movePagePopupSelector = (state: RootState): MovePageToPopupState => {
  return state.popups.movePageToPopup
}
const pageOptionsPopupSelector = (state: RootState): PageOptionsPopupState => {
  return state.popups.pageOptionsPopup
}
const pagesTrashPopupSelector = (state: RootState): boolean => {
  return state.popups.isPagesTrashModalOpen
}
const pageSettingsPopupSelector = (
  state: RootState
): PageSettingsPopupState => {
  return state.popups.pageSettingsPopup
}

export {
  renamePopupSelector,
  changePageIconPopupSelector,
  quickSearchPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  pagesTrashPopupSelector,
}
