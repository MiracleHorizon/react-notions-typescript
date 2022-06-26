import { RootState } from '../store'

const isModalOpenSelector = (state: RootState) => state.switchCover.isModalOpen
const categoriesSelector = (state: RootState) => state.switchCover.categories
const coversListsSelector = (state: RootState) => state.switchCover.coversLists
const selectedCategorySelector = (state: RootState) =>
  state.switchCover.selectedCategory

export {
  isModalOpenSelector,
  categoriesSelector,
  coversListsSelector,
  selectedCategorySelector,
}
