import { createSlice } from '@reduxjs/toolkit'
import { NavbarCategories, SwitchCoverState } from './types'
import { CoverColors } from '../workSpaceSlice/types'

const initialState: SwitchCoverState = {
  isModalOpen: false,
  categories: [
    NavbarCategories.GALLERY,
    NavbarCategories.UPLOAD,
    NavbarCategories.LINK,
  ],
  coversLists: [
    { title: 'Color & Gradient', covers: Object.values(CoverColors) },
    { title: 'NASA Archive', covers: Object.values(CoverColors) },
    {
      title: 'The Met Museum - Japanese Prints',
      covers: Object.values(CoverColors),
    },
  ],
  selectedCategory: 'Gallery',
  selectedCover: CoverColors.PURPLE,
}

export const switchCoverSlice = createSlice({
  name: 'switchCover',

  initialState: initialState,

  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload
    },
    setIsModalOpen(state) {
      state.isModalOpen = true
    },
    setIsModalClose(state) {
      state.isModalOpen = false
    },
  },
})

export const { setCategory, setIsModalOpen, setIsModalClose } =
  switchCoverSlice.actions

export default switchCoverSlice.reducer
