import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import {
  changeIconPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  quickSearchPopupSelector,
  renamePopupSelector,
} from 'redux/popupsSlice/selectors'

const RenamePopup = lazy(() => import('components/Popups/Rename'))
const MovePagePopup = lazy(() => import('components/Popups/MovePage'))
const PageOptionsPopup = lazy(() => import('components/Popups/PageOptions'))
const PageSettingsPopup = lazy(() => import('components/Popups/PageSettings'))
const QuickSearchPopup = lazy(() => import('components/Popups/QuickSearch'))
const ChangeIconPopup = lazy(
  () => import('./ChangeDecor/components/ChangeIconPopup')
)

const PopupsContainer: React.FC = () => {
  const isChangeIconPopupOpen = useSelector(changeIconPopupSelector).isOpen
  const isRenamePopupOpen = useSelector(renamePopupSelector).isOpen
  const isPageOptionsPopupOpen = useSelector(pageOptionsPopupSelector).isOpen
  const isMovePagePopupOpen = useSelector(movePagePopupSelector).isOpen
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector).isOpen
  const isQuickSearchPopupOpen = useSelector(quickSearchPopupSelector)

  return (
    <Suspense fallback={<p>Загрузка вслывающего окна</p>}>
      {isChangeIconPopupOpen && <ChangeIconPopup />}
      {isRenamePopupOpen && <RenamePopup />}
      {isPageOptionsPopupOpen && <PageOptionsPopup />}
      {isMovePagePopupOpen && <MovePagePopup />}
      {isPageSettingsPopupOpen && <PageSettingsPopup />}
      {isQuickSearchPopupOpen && <QuickSearchPopup />}
    </Suspense>
  )
}

export default PopupsContainer
