import { RootState } from '../store'

const changePageTitleModalSelector = (state: RootState): boolean => {
  return state.modals.isChangePageTitleModalOpen
}
const quickSearchModalSelector = (state: RootState): boolean => {
  return state.modals.isQuickSearchModalOpen
}

export { changePageTitleModalSelector, quickSearchModalSelector }
