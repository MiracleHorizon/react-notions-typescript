interface DefaultAlertState {
  isOpen: boolean
}

interface PermanentlyDeleteAlertState extends DefaultAlertState {
  pageId: number | null
}

// interface MoveToTrashAlertState extends DefaultAlertState{
// }

export default interface AlertsState {
  permanentlyDeleteAlert: PermanentlyDeleteAlertState
  moveToTrashAlert: DefaultAlertState
}
export type { PermanentlyDeleteAlertState }
