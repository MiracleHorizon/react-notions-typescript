import { createSlice } from '@reduxjs/toolkit'
import {
  ChangeCoverCategories,
  ChangeDecorState,
  ChangeIconCategories,
} from './types'
import { CoverColors } from '../workSpaceSlice/types'

import metJapaneseCover1 from 'assets/img/pageCovers/met-japanese-1.jpg'

const initialState: ChangeDecorState = {
  isCoverModalOpen: false,
  isIconModalOpen: false,
  coverCategories: [
    ChangeCoverCategories.GALLERY,
    ChangeCoverCategories.UPLOAD,
    ChangeCoverCategories.LINK,
  ],
  iconCategories: [
    ChangeIconCategories.EMOJI,
    ChangeIconCategories.UPLOAD,
    ChangeIconCategories.LINK,
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
  selectedCoverCategory: ChangeCoverCategories.GALLERY,
  selectedIconCategory: ChangeIconCategories.EMOJI,
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
    setIsCoverModalClose(state) {
      state.isCoverModalOpen = false
    },
    refreshCoverCategory(state) {
      state.selectedCoverCategory = ChangeCoverCategories.GALLERY
    },
    refreshIconCategory(state) {
      state.selectedIconCategory = ChangeIconCategories.EMOJI
    },
  },
})

export const {
  setCoverCategory,
  setIconCategory,
  setIsCoverModalOpen,
  setIsCoverModalClose,
  refreshCoverCategory,
  refreshIconCategory,
} = pageDecorationSlice.actions

export default pageDecorationSlice.reducer
