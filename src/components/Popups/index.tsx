import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import {
  changePageIconPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  renamePopupSelector,
} from 'redux/popupsSlice/selectors'

const RenamePopup = lazy(() => import('components/Popups/Rename'))
const MovePagePopup = lazy(() => import('components/Popups/MovePage'))
const PageOptionsPopup = lazy(() => import('components/Popups/PageOptions'))
const PageSettingsPopup = lazy(() => import('components/Popups/PageSettings'))
const ChangePageIconPopup = lazy(() => import('components/Popups/SwitchIcon'))

const PopupsContainer: React.FC = () => {
  const isChangePageIconPopupOpen = useSelector(changePageIconPopupSelector)
  const isRenamePopupOpen = useSelector(renamePopupSelector).isOpen
  const isPageOptionsPopupOpen = useSelector(pageOptionsPopupSelector).isOpen
  const isMovePagePopupOpen = useSelector(movePagePopupSelector).isOpen
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector).isOpen

  return (
    <Suspense fallback={<p>Загрузка вслывающего окна</p>}>
      {isChangePageIconPopupOpen && <ChangePageIconPopup />}
      {isRenamePopupOpen && <RenamePopup />}
      {isPageOptionsPopupOpen && <PageOptionsPopup />}
      {isMovePagePopupOpen && <MovePagePopup />}
      {isPageSettingsPopupOpen && <PageSettingsPopup />}
    </Suspense>
  )
}

export default PopupsContainer
