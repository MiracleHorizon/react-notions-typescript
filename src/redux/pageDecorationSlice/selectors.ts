import { RootState } from '../store'

const isCoverModalOpenSelector = (state: RootState) =>
  state.pageDecoration.isCoverModalOpen
const isIconModalOpenSelector = (state: RootState) =>
  state.pageDecoration.isIconModalOpen
const coverCategoriesSelector = (state: RootState) =>
  state.pageDecoration.coverCategories
const iconCategoriesSelector = (state: RootState) =>
  state.pageDecoration.iconCategories
const coversListsSelector = (state: RootState) =>
  state.pageDecoration.coversLists
const iconsListsSelector = (state: RootState) => state.pageDecoration.iconsLists
const selectedCoverCategorySelector = (state: RootState) =>
  state.pageDecoration.selectedCoverCategory
const selectedIconCategorySelector = (state: RootState) =>
  state.pageDecoration.selectedIconCategory

export {
  isCoverModalOpenSelector,
  isIconModalOpenSelector,
  coverCategoriesSelector,
  iconCategoriesSelector,
  coversListsSelector,
  iconsListsSelector,
  selectedCoverCategorySelector,
  selectedIconCategorySelector,
}
