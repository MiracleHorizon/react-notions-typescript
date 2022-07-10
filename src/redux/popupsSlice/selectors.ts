import { RootState } from '../store'
import {
  RenamePopupState,
  MovePagePopupState,
  PageOptionsPopupState,
  PageSettingsPopupState,
  PageIconPopup,
  PopupInitialState,
  PageCoverPopup,
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
const quickSearchPopupSelector = (state: RootState): boolean => {
  return state.popups.isQuickSearchPopupOpen
}
const pagesTrashPopupSelector = (state: RootState): boolean => {
  return state.popups.isPagesTrashPopupOpen
}

export {
  appSettingsPopupSelector,
  renamePopupSelector,
  changeIconPopupSelector,
  changeCoverPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  quickSearchPopupSelector,
  pagesTrashPopupSelector,
}
