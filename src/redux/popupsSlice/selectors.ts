import { RootState } from '../store'
import {
  RenamePopupState,
  MovePagePopupState,
  PageOptionsPopupState,
  PageSettingsPopupState,
  PageIconPopup,
  PopupInitialState,
} from './types'

const renamePopupSelector = (state: RootState): RenamePopupState => {
  return state.popups.renamePopup
}
const changeIconPopupSelector = (state: RootState): PageIconPopup => {
  return state.popups.pageIconPopup
}
const changeCoverPopupSelector = (state: RootState): PopupInitialState => {
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
const quickSearchPopupSelector = (state: RootState): boolean => {
  return state.popups.isQuickSearchPopupOpen
}
const pagesTrashPopupSelector = (state: RootState): boolean => {
  return state.popups.isPagesTrashPopupOpen
}

export {
  renamePopupSelector,
  changeIconPopupSelector,
  changeCoverPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  quickSearchPopupSelector,
  pagesTrashPopupSelector,
}
