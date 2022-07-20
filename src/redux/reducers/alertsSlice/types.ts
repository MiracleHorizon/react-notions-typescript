interface DefaultAlertState {
  isOpen: boolean
}

interface PermanentlyDeleteAlertState extends DefaultAlertState {
  pageId: string
}

interface DeleteCommentAlertState extends DefaultAlertState {
  commentId: string | null
}

interface MoveToTrashAlertState extends DefaultAlertState {
  pageId: string
}

export default interface AlertsState {
  permanentlyDeleteAlert: PermanentlyDeleteAlertState
  deleteCommentAlert: DeleteCommentAlertState
  moveToTrashAlert: MoveToTrashAlertState
}

export type { PermanentlyDeleteAlertState }
