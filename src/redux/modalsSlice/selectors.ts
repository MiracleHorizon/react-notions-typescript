import { RootState } from '../store'
import { PageOptionsModal } from './types'

const changePageTitleModalSelector = (state: RootState): boolean => {
  return state.modals.isChangePageTitleModalOpen
}
const quickSearchModalSelector = (state: RootState): boolean => {
  return state.modals.isQuickSearchModalOpen
}
const movePageToModalSelector = (state: RootState): boolean => {
  return state.modals.isMovePageToModalOpen
}
const pageOptionsModalSelector = (state: RootState): PageOptionsModal => {
  return state.modals.pageOptionsModal
}

export {
  changePageTitleModalSelector,
  quickSearchModalSelector,
  movePageToModalSelector,
  pageOptionsModalSelector,
}
