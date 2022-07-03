import { createSlice } from '@reduxjs/toolkit'
import { AppModalsState, PageTemplates } from './types'

const initialState: AppModalsState = {
  isPageSettingsPopupOpen: false,
  template: PageTemplates.BOARD,
}

export const pageSettingsPopupSlice = createSlice({
  name: 'pageSettings',

  initialState: initialState,

  reducers: {
    openPageSettingsPopup(state): void {
      state.isPageSettingsPopupOpen = true
    },
    closePageSettingsPopup(state): void {
      state.isPageSettingsPopupOpen = false
    },
  },
})

export const { openPageSettingsPopup, closePageSettingsPopup } =
  pageSettingsPopupSlice.actions

export default pageSettingsPopupSlice.reducer
