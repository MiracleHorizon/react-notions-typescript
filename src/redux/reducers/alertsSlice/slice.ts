import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AlertsState from './types'

const initialState: AlertsState = {
  permanentlyDeleteAlert: {
    isOpen: false,
    pageId: '',
  },
  deleteCommentAlert: {
    isOpen: false,
    commentId: null,
  },
  moveToTrashAlert: {
    isOpen: false,
    pageId: '',
  },
}

export const alertsSlice = createSlice({
  name: 'alerts',

  initialState: initialState,

  reducers: {
    setPermanentlyDeleteAlertPage(state, action: PayloadAction<string>) {
      state.permanentlyDeleteAlert.pageId = action.payload
    },
    setDeleteCommentAlertComment(state, action: PayloadAction<string>) {
      state.deleteCommentAlert.commentId = action.payload
    },
    setMoveToTrashAlertPage(state, action: PayloadAction<string>) {
      state.moveToTrashAlert.pageId = action.payload
    },

    showPermanentlyDeleteAlert(state) {
      state.permanentlyDeleteAlert.isOpen = true
    },
    showDeleteCommentAlert(state) {
      state.deleteCommentAlert.isOpen = true
    },
    showMoveToTrashAlert(state) {
      state.moveToTrashAlert.isOpen = true
    },

    hidePermanentlyDeleteAlert(state) {
      state.permanentlyDeleteAlert.isOpen = false
    },
    hideDeleteCommentAlert(state) {
      state.deleteCommentAlert.isOpen = false
    },
    hideMoveToTrashAlert(state) {
      state.moveToTrashAlert.isOpen = false
    },
  },
})

export const {
  setPermanentlyDeleteAlertPage,
  setDeleteCommentAlertComment,
  setMoveToTrashAlertPage,
  showPermanentlyDeleteAlert,
  showDeleteCommentAlert,
  showMoveToTrashAlert,
  hidePermanentlyDeleteAlert,
  hideDeleteCommentAlert,
  hideMoveToTrashAlert,
} = alertsSlice.actions

export default alertsSlice.reducer
