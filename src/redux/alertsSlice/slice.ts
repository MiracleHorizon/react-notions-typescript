import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AlertsState from './types'

const initialState: AlertsState = {
  permanentlyDeleteAlert: {
    isOpen: false,
    pageId: -1,
  },
}

export const alertsSlice = createSlice({
  name: 'alerts',

  initialState: initialState,

  reducers: {
    openPermanentlyDeleteAlert(state) {
      state.permanentlyDeleteAlert.isOpen = true
    },
    closePermanentlyDeleteAlert(state) {
      state.permanentlyDeleteAlert.isOpen = false
    },
    setPermanentlyDeleteAlertPage(state, action: PayloadAction<number>) {
      state.permanentlyDeleteAlert.pageId = action.payload
    },
  },
})

export const {
  openPermanentlyDeleteAlert,
  closePermanentlyDeleteAlert,
  setPermanentlyDeleteAlertPage,
} = alertsSlice.actions

export default alertsSlice.reducer
