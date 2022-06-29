import { RootState } from '../store'

const changePageTitleModalSelector = (state: RootState): boolean => {
  return state.modals.isChangePageTitleModalOpen
}
const quickSearchModalSelector = (state: RootState): boolean => {
  return state.modals.isQuickSearchModalOpen
}
const favoritePagesOptionsModalSelector = (state: RootState): boolean => {
  return state.modals.isFavoritePagesOptionsModalOpen
}
const commonPagesOptionsModalSelector = (state: RootState): boolean => {
  return state.modals.isCommonPagesOptionsModalOpen
}

export {
  changePageTitleModalSelector,
  quickSearchModalSelector,
  favoritePagesOptionsModalSelector,
  commonPagesOptionsModalSelector,
}
