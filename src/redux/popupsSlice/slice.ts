import { createSlice } from '@reduxjs/toolkit'

import { IAppPopupsState, PageTemplates } from './types'

const initialState: IAppPopupsState = {
  isPageSettingsPopupOpen: false,
  template: PageTemplates.BOARD,
}

export const pageSettingsPopupSlice = createSlice({
  name: 'pageSettings',

  initialState: initialState,

  reducers: {
    closeSettingsPopup(state): void {
      state.isPageSettingsPopupOpen = false
    },
    openSettingsPopup(state) {
      state.isPageSettingsPopupOpen = true
    },
  },
})

export const { closeSettingsPopup, openSettingsPopup } =
  pageSettingsPopupSlice.actions

export default pageSettingsPopupSlice.reducer
