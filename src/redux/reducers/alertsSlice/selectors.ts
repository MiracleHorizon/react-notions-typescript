import { RootState } from 'redux/store'
import { PermanentlyDeleteAlertState } from './types'

const permanentlyDeleteAlertSelector = (
  state: RootState
): PermanentlyDeleteAlertState => {
  return state.alerts.permanentlyDeleteAlert
}

const deleteCommentAlertSelector = (state: RootState) => {
  return state.alerts.deleteCommentAlert
}

const isDeleteCommentAlertSelector = (state: RootState): boolean => {
  return state.alerts.deleteCommentAlert.isOpen
}

const isDeleteAlertOpenSelector = (state: RootState): boolean => {
  return state.alerts.permanentlyDeleteAlert.isOpen
}

const moveToTrashAlertSelector = (state: RootState) => {
  return state.alerts.moveToTrashAlert
}

export {
  permanentlyDeleteAlertSelector,
  deleteCommentAlertSelector,
  moveToTrashAlertSelector,
  isDeleteAlertOpenSelector,
  isDeleteCommentAlertSelector,
}
