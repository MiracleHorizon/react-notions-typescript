import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import {
  appSettingsPopupSelector,
  changeCoverPopupSelector,
  changeIconPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  pagesTrashPopupSelector,
  quickSearchPopupSelector,
  renamePopupSelector,
} from 'redux/popupsSlice/selectors'
import ChangeCoverPopup from './ChangeDecor/components/ChangeCoverPopup'

const AppSettingsPopup = lazy(() => import('components/Popups/AppSettings'))
const RenamePopup = lazy(() => import('components/Popups/Rename'))
const MovePagePopup = lazy(() => import('components/Popups/MovePage'))
const PageOptionsPopup = lazy(() => import('components/Popups/PageOptions'))
const PageSettingsPopup = lazy(() => import('components/Popups/PageSettings'))
const QuickSearchPopup = lazy(() => import('components/Popups/QuickSearch'))
const PagesTrashPopup = lazy(() => import('components/Popups/PagesTrash'))
const ChangeIconPopup = lazy(
  () => import('./ChangeDecor/components/ChangeIconPopup')
)

const PopupsContainer: React.FC = () => {
  const isAppSettingsPopupOpen = useSelector(appSettingsPopupSelector)
  const isChangeIconPopupOpen = useSelector(changeIconPopupSelector).isOpen
  const isChangeCoverPopupOpen = useSelector(changeCoverPopupSelector).isOpen
  const isRenamePopupOpen = useSelector(renamePopupSelector).isOpen
  const isPageOptionsPopupOpen = useSelector(pageOptionsPopupSelector).isOpen
  const isMovePagePopupOpen = useSelector(movePagePopupSelector).isOpen
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector).isOpen
  const isQuickSearchPopupOpen = useSelector(quickSearchPopupSelector)
  const isPagesTrashPopupOpen = useSelector(pagesTrashPopupSelector)

  return (
    <Suspense fallback={<p>Загрузка вслывающего окна</p>}>
      {isAppSettingsPopupOpen && <AppSettingsPopup />}
      {isChangeIconPopupOpen && <ChangeIconPopup />}
      {isChangeCoverPopupOpen && <ChangeCoverPopup />}
      {isRenamePopupOpen && <RenamePopup />}
      {isPageOptionsPopupOpen && <PageOptionsPopup />}
      {isMovePagePopupOpen && <MovePagePopup />}
      {isPageSettingsPopupOpen && <PageSettingsPopup />}
      {isQuickSearchPopupOpen && <QuickSearchPopup />}
      {isPagesTrashPopupOpen && <PagesTrashPopup />}
    </Suspense>
  )
}

export default PopupsContainer
