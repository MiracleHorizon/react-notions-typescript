import { RootState } from '../store'

const changePageTitleModalSelector = (state: RootState): boolean => {
  return state.modals.isChangePageTitlePopupOpen
}

export { changePageTitleModalSelector }
