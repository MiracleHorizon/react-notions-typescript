import { RootState } from '../store'
import { PermanentlyDeleteAlertState } from './types'

const permanentlyDeleteAlertSelector = (
  state: RootState
): PermanentlyDeleteAlertState => {
  return state.alerts.permanentlyDeleteAlert
}

const isPermanentlyDeleteAlertOpenSelector = (state: RootState): boolean => {
  return state.alerts.permanentlyDeleteAlert.isOpen
}

const isMoveToTrashAlertOpenSelector = (state: RootState): boolean => {
  return state.alerts.moveToTrashAlert.isOpen
}

export {
  permanentlyDeleteAlertSelector,
  isPermanentlyDeleteAlertOpenSelector,
  isMoveToTrashAlertOpenSelector,
}
