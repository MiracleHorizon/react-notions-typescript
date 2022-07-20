import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import ChangeCoverPopup from './components/ChangeDecor/components/ChangeCoverPopup'
import ChangeIconPopup from './components/ChangeDecor/components/ChangeIconPopup'
import AppSettingsPopup from './components/AppSettings'
import RenamePopup from './components/Rename'
import PageOptionsPopup from './components/PageOptions'
import MovePagePopup from './components/MovePage'
import PageSettingsPopup from './components/PageSettings'
import QuickSearchPopup from './components/QuickSearch'
import PagesTrashPopup from './components/PagesTrash'
import CommentOptionsPopup from './components/CommentOptions'
import PageCustomizePopup from './components/PageCustomize'
import PageContentOptionsPopup from './components/PageContentOptions'
import PageContentStylesPopup from './components/ContentStylesPopup'
import PageContentItemTypePopup from './components/PageContentType'

import {
  appSettingsPopupSelector,
  changeCoverPopupSelector,
  changeIconPopupSelector,
  commentOptionsPopupSelector,
  movePagePopupSelector,
  pageOptionsPopupSelector,
  pageSettingsPopupSelector,
  quickSearchPopupSelector,
  renamePopupSelector,
  pagesTrashPopupSelector,
  pageCustomizePopupSelector,
  contentOptionsPopupSelector,
  contentStylesPopupSelector,
  contentTypesPopupSelector,
} from 'redux/selectors'

// const AppSettingsPopup = lazy(() => import('components/Popups/AppSettings'))
// const RenamePopup = lazy(() => import('components/Popups/Rename'))
// const MovePagePopup = lazy(() => import('components/Popups/MovePage'))
// const PageOptionsPopup = lazy(() => import('components/Popups/PageOptions'))
// const PageSettingsPopup = lazy(() => import('components/Popups/PageSettings'))
// const QuickSearchPopup = lazy(() => import('components/Popups/QuickSearch'))
// const PagesTrashPopup = lazy(() => import('components/Popups/PagesTrash'))
// const ChangeIconPopup = lazy(
//   () => import('./ChangeDecor/components/ChangeIconPopup')
// )

const PopupsContainer: FC = () => {
  const isQuickSearchPopupOpen = useSelector(quickSearchPopupSelector)
  const isPagesTrashPopupOpen = useSelector(pagesTrashPopupSelector)
  const isPageCustomizePopupOpen = useSelector(pageCustomizePopupSelector)
  const isAppSettingsPopupOpen = useSelector(appSettingsPopupSelector)
  const isChangeIconPopupOpen = useSelector(changeIconPopupSelector).isOpen
  const isChangeCoverPopupOpen = useSelector(changeCoverPopupSelector).isOpen
  const isRenamePopupOpen = useSelector(renamePopupSelector).isOpen
  const isPageOptionsPopupOpen = useSelector(pageOptionsPopupSelector).isOpen
  const isMovePagePopupOpen = useSelector(movePagePopupSelector).isOpen
  const isPageSettingsPopupOpen = useSelector(pageSettingsPopupSelector).isOpen
  const isContentTypePopupOpen = useSelector(contentTypesPopupSelector).isOpen
  const isContentOptionsPopupOpen = useSelector(
    contentOptionsPopupSelector
  ).isOpen
  const isContentStylesPopupOpen = useSelector(
    contentStylesPopupSelector
  ).isOpen
  const isCommentOptionsPopupOpen = useSelector(
    commentOptionsPopupSelector
  ).isOpen

  return (
    <>
      {isAppSettingsPopupOpen && <AppSettingsPopup />}
      {isChangeIconPopupOpen && <ChangeIconPopup />}
      {isChangeCoverPopupOpen && <ChangeCoverPopup />}
      {isRenamePopupOpen && <RenamePopup />}
      {isPageOptionsPopupOpen && <PageOptionsPopup />}
      {isMovePagePopupOpen && <MovePagePopup />}
      {isPageSettingsPopupOpen && <PageSettingsPopup />}
      {isQuickSearchPopupOpen && <QuickSearchPopup />}
      {isPagesTrashPopupOpen && <PagesTrashPopup />}
      {isCommentOptionsPopupOpen && <CommentOptionsPopup />}
      {isPageCustomizePopupOpen && <PageCustomizePopup />}
      {isContentOptionsPopupOpen && <PageContentOptionsPopup />}
      {isContentStylesPopupOpen && <PageContentStylesPopup />}
      {isContentTypePopupOpen && <PageContentItemTypePopup />}
    </>
  )
}

export default PopupsContainer
