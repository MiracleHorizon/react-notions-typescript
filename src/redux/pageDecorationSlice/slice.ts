import { createSlice } from '@reduxjs/toolkit'
import {
  SwitchCoverCategories,
  SwitchCoverState,
  SwitchIconCategories,
} from './types'
import { CoverColors } from '../workSpaceSlice/types'

const initialState: SwitchCoverState = {
  isCoverModalOpen: false,
  isIconModalOpen: false,
  coverCategories: [
    SwitchCoverCategories.GALLERY,
    SwitchCoverCategories.UPLOAD,
    SwitchCoverCategories.LINK,
  ],
  iconCategories: [
    SwitchIconCategories.EMOJI,
    SwitchIconCategories.UPLOAD,
    SwitchIconCategories.LINK,
  ],
  coversLists: [
    { title: 'Color & Gradient', covers: Object.values(CoverColors) },
    { title: 'NASA Archive', covers: Object.values(CoverColors) },
    {
      title: 'The Met Museum - Japanese Prints',
      covers: Object.values(CoverColors),
    },
  ],
  iconsLists: [],
  selectedCoverCategory: SwitchCoverCategories.GALLERY,
  selectedIconCategory: SwitchIconCategories.EMOJI,
  selectedCover: CoverColors.PURPLE,
  selectedIcon: '',
}

export const pageDecorationSlice = createSlice({
  name: 'pageDecoration',

  initialState: initialState,

  reducers: {
    setCoverCategory(state, action) {
      state.selectedCoverCategory = action.payload
    },
    setIconCategory(state, action) {
      state.selectedIconCategory = action.payload
    },
    setIsCoverModalOpen(state) {
      state.isCoverModalOpen = true
    },
    setIsIconModalOpen(state) {
      state.isIconModalOpen = true
    },
    setIsCoverModalClose(state) {
      state.isCoverModalOpen = false
    },
    setIsIconModalClose(state) {
      state.isIconModalOpen = false
    },
    refreshCoverCategory(state) {
      state.selectedCoverCategory = SwitchCoverCategories.GALLERY
    },
    refreshIconCategory(state) {
      state.selectedCoverCategory = SwitchCoverCategories.GALLERY
    },
  },
})

export const {
  setCoverCategory,
  setIconCategory,
  setIsCoverModalOpen,
  setIsIconModalOpen,
  setIsCoverModalClose,
  setIsIconModalClose,
  refreshCoverCategory,
  refreshIconCategory,
} = pageDecorationSlice.actions

export default pageDecorationSlice.reducer
