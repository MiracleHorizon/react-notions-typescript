import { RootState } from '../store'
import { MovePageToPopup, PageOptionsPopup } from './types'

const changePageTitleModalSelector = (state: RootState): boolean => {
  return state.modals.isChangePageTitleModalOpen
}
const changePageIconPopupSelector = (state: RootState): boolean => {
  return state.modals.isChangePageIconPopupOpen
}
const quickSearchModalSelector = (state: RootState): boolean => {
  return state.modals.isQuickSearchModalOpen
}
const movePageToModalSelector = (state: RootState): MovePageToPopup => {
  return state.modals.movePageToPopup
}
const pageOptionsModalSelector = (state: RootState): PageOptionsPopup => {
  return state.modals.pageOptionsPopup
}
const pagesTrashPopupSelector = (state: RootState): boolean => {
  return state.modals.isPagesTrashModalOpen
}

export {
  changePageTitleModalSelector,
  changePageIconPopupSelector,
  quickSearchModalSelector,
  movePageToModalSelector,
  pageOptionsModalSelector,
  pagesTrashPopupSelector,
}
