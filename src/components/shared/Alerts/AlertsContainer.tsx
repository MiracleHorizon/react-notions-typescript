import React, { FC, lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import MoveToTrashAlert from './MoveToTrash'
import {
  isDeleteAlertOpenSelector,
  isDeleteCommentAlertSelector,
} from 'redux/selectors'

import DeleteCommentAlert from './PermanentlyDelete/components/DeleteCommentAlert'
const PermanentlyDeleteAlert = lazy(
  () => import('./PermanentlyDelete/components/PermanentlyDeletePageAlert')
)

const AlertsContainer: FC = () => {
  const isPermanentlyDeleteAlertOpen = useSelector(isDeleteAlertOpenSelector)
  const isDeleteCommentAlertOpen = useSelector(isDeleteCommentAlertSelector)

  return (
    <Suspense fallback={<h1>Алерт загружается</h1>}>
      {isPermanentlyDeleteAlertOpen && <PermanentlyDeleteAlert />}
      {isDeleteCommentAlertOpen && <DeleteCommentAlert />}
      <MoveToTrashAlert />
    </Suspense>
  )
}

export default AlertsContainer
