import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AlertsState from './types'

const initialState: AlertsState = {
  permanentlyDeleteAlert: {
    isOpen: false,
    pageId: null,
  },
  moveToTrashAlert: {
    isOpen: false,
  },
}

export const alertsSlice = createSlice({
  name: 'alerts',

  initialState: initialState,

  reducers: {
    setPermanentlyDeleteAlertPage(state, action: PayloadAction<number>) {
      state.permanentlyDeleteAlert.pageId = action.payload
    },
    showPermanentlyDeleteAlert(state) {
      state.permanentlyDeleteAlert.isOpen = true
    },
    showMoveToTrashAlert(state) {
      state.moveToTrashAlert.isOpen = true
    },
    hidePermanentlyDeleteAlert(state) {
      state.permanentlyDeleteAlert.isOpen = false
    },
    hideMoveToTrashAlert(state) {
      state.moveToTrashAlert.isOpen = false
    },
  },
})

export const {
  setPermanentlyDeleteAlertPage,
  showPermanentlyDeleteAlert,
  showMoveToTrashAlert,
  hidePermanentlyDeleteAlert,
  hideMoveToTrashAlert,
} = alertsSlice.actions

export default alertsSlice.reducer
