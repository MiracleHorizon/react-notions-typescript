import { createSlice } from '@reduxjs/toolkit'

import { IAppModalsState } from './types'

const initialState: IAppModalsState = {
  isChangePageTitlePopupOpen: false,
}

export const modalsSlice = createSlice({
  name: 'modals',

  initialState: initialState,

  reducers: {
    closeChangePageTitleModal(state) {
      state.isChangePageTitlePopupOpen = false
    },
    openChangePageTitleModal(state) {
      state.isChangePageTitlePopupOpen = true
    },
  },
})

export const { closeChangePageTitleModal, openChangePageTitleModal } =
  modalsSlice.actions

export default modalsSlice.reducer
