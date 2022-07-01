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
    openSettingsModal(state): void {
      state.isPageSettingsPopupOpen = true
    },
    closeSettingsModal(state): void {
      state.isPageSettingsPopupOpen = false
    },
    toggleSettingsModal(state) {
      state.isPageSettingsPopupOpen = !state.isPageSettingsPopupOpen
    },
  },
})

export const { openSettingsModal, closeSettingsModal, toggleSettingsModal } =
  pageSettingsPopupSlice.actions

export default pageSettingsPopupSlice.reducer
