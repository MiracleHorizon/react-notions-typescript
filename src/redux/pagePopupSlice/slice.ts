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
    setIsOpen(state) {
      state.isPopupOpen = !state.isPopupOpen
    },
  },
})

export const { setIsOpen } = pageSettingsPopupSlice.actions

export default pageSettingsPopupSlice.reducer
