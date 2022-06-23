import { IPageSettingsPopupState, Templates } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IPageSettingsPopupState = {
  isPopupOpen: false,
  template: Templates.BOARD,
}

export const pageSettingsPopupSlice = createSlice({
  name: 'pageSettings',

  initialState: initialState,

  reducers: {
    closeSettingsPopup(state) {
      state.isPopupOpen = false
    },
    openSettingsPopup(state) {
      state.isPopupOpen = true
    },
  },
})

export const { closeSettingsPopup, openSettingsPopup } =
  pageSettingsPopupSlice.actions

export default pageSettingsPopupSlice.reducer
