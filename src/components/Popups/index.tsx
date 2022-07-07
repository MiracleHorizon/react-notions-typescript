import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import {
  changeIconPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  renamePopupSelector,
} from 'redux/popupsSlice/selectors'

const RenamePopup = lazy(() => import('components/Popups/Rename'))
const MovePagePopup = lazy(() => import('components/Popups/MovePage'))
const PageOptionsPopup = lazy(() => import('components/Popups/PageOptions'))
const PageSettingsPopup = lazy(() => import('components/Popups/PageSettings'))
const ChangeIconPopup = lazy(() => import('components/Popups/ChangeIcon'))

const PopupsContainer: React.FC = () => {
  const isChangeIconPopupOpen = useSelector(changeIconPopupSelector).isOpen
  const isRenamePopupOpen = useSelector(renamePopupSelector).isOpen
  const isPageOptionsPopupOpen = useSelector(pageOptionsPopupSelector).isOpen
  const isMovePagePopupOpen = useSelector(movePagePopupSelector).isOpen
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector).isOpen

  return (
    <Suspense fallback={<p>Загрузка вслывающего окна</p>}>
      {isChangeIconPopupOpen && <ChangeIconPopup />}
      {isRenamePopupOpen && <RenamePopup />}
      {isPageOptionsPopupOpen && <PageOptionsPopup />}
      {isMovePagePopupOpen && <MovePagePopup />}
      {isPageSettingsPopupOpen && <PageSettingsPopup />}
    </Suspense>
  )
}

export default PopupsContainer
