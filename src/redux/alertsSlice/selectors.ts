import { RootState } from '../store'

export const permanentlyDeleteAlertSelector = (state: RootState) => {
  return state.alerts.permanentlyDeleteAlert
}
