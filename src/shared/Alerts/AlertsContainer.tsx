import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import MoveToTrashAlert from './MoveToTrash'
import { isPermanentlyDeleteAlertOpenSelector } from 'redux/alertsSlice/selectors'

const PermanentlyDeleteAlert = lazy(() => import('./PermanentlyDelete'))

const AlertsContainer: React.FC = () => {
  const isPermanentlyDeleteAlertOpen = useSelector(
    isPermanentlyDeleteAlertOpenSelector
  )

  return (
    <Suspense fallback={<h1>Алерт загружается</h1>}>
      {isPermanentlyDeleteAlertOpen && <PermanentlyDeleteAlert />}
      <MoveToTrashAlert />
    </Suspense>
  )
}

export default AlertsContainer
