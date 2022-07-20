import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useLocation } from 'react-router-dom'

import SwitchFontPanel from './SwitchFontPanel'
import ToggleOptionsList from 'components/shared/Options/ToggleOptionsList/ToggleOptionsList'
import PopupOptionItem from 'components/shared/Options/PopupOptionItem'
import MoveToOptionItem from 'components/shared/Options/OptionsList/PageOptionItems/components/MoveToOptionItem'
import ChangesBar from 'components/shared/ChangesBar'
import { Separator } from 'components/ui'
import {
  CustomizePageSvg,
  LockPageSvg,
  UnlockPageSvg,
  RemoveFavoriteSvg,
  UnfavoriteStarSvg,
  LinkSvg,
  DeleteTrashSvg,
} from 'components/ui/SVG'

import { useAppDispatch } from 'redux/store'
import { useSelectItem } from 'hooks/mouse/useSelectItem'
import { deletePage, updatePage } from 'api/reduxAsyncThunks'
import {
  closeRightSidebar,
  showMoveToTrashAlert,
  closePageSettingsPopup,
  openMovePagePopup,
  setMovePagePopupCoords,
  setMoveToTrashAlertPage,
  openPageCustomizePopup,
  setMovePagePopupEntity,
} from 'redux/actions'
import { currentPageCopySelector, currentPageSelector } from 'redux/selectors'
import { Wrapper, StyledList } from '../../PageSettingsPopup.styles'

const ListPageSettingsPopup: FC = memo(() => {
  const [isLocked, setIsLocked] = useState<boolean>(false) //!
  const { activeItem, onSelectItem } = useSelectItem('')
  const currentPageCopy = useSelector(currentPageCopySelector)
  const currentPage = useSelector(currentPageSelector)
  const { _id, isFavorite, updatedAt } = currentPage
  const popupRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const movePagePopupCoords = useMemo(() => {
    return { top: '50px', right: '5px' }
  }, [])

  const onOpenPageCustomizePopup = useCallback((): void => {
    dispatch(openPageCustomizePopup())
  }, [dispatch])

  const onCopyPageLink = (): void => {
    console.log(location)
  }

  const onLockPage = useCallback((): void => {
    // Пост запрос
    setIsLocked(true)
  }, [])

  const onUnlockPage = useCallback((): void => {
    // Пост запрос
    setIsLocked(false)
  }, [])

  const onAddToFavorite = useCallback((): void => {
    currentPageCopy.isFavorite = true
    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy])

  const onRemoveFromFavorites = useCallback((): void => {
    currentPageCopy.isFavorite = false
    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy])

  const onDeletePage = useCallback((): void => {
    appDispatch(deletePage(_id))
    dispatch(closeRightSidebar())
    dispatch(showMoveToTrashAlert())
    dispatch(setMoveToTrashAlertPage(_id))
  }, [appDispatch, dispatch, _id])

  const onOpenMovePagesToPopup = useCallback((): void => {
    dispatch(setMovePagePopupCoords(movePagePopupCoords))
    dispatch(setMovePagePopupEntity(currentPage))
    dispatch(closePageSettingsPopup)
    dispatch(openMovePagePopup())
  }, [dispatch, movePagePopupCoords, currentPage])

  const handleClickOutside = useCallback((): void => {
    dispatch(closePageSettingsPopup())
  }, [dispatch])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Wrapper ref={popupRef}>
      <SwitchFontPanel />
      <ToggleOptionsList activeItem={activeItem} onSelect={onSelectItem} />
      <StyledList>
        <PopupOptionItem
          title='Customize page'
          icon={<CustomizePageSvg />}
          action={onOpenPageCustomizePopup}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
        <PopupOptionItem
          title={isLocked ? 'Unlock page' : 'Lock page'}
          icon={isLocked ? <UnlockPageSvg /> : <LockPageSvg />}
          action={isLocked ? onUnlockPage : onLockPage}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </StyledList>
      <Separator />
      <StyledList>
        <PopupOptionItem
          title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          icon={
            isFavorite ? (
              <RemoveFavoriteSvg />
            ) : (
              <UnfavoriteStarSvg width={17} height={17} />
            )
          }
          action={isFavorite ? onRemoveFromFavorites : onAddToFavorite}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
        <PopupOptionItem
          title='Copy link'
          icon={<LinkSvg />}
          action={onCopyPageLink}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </StyledList>
      <Separator />
      <StyledList>
        <PopupOptionItem
          title='Delete'
          icon={<DeleteTrashSvg />}
          action={onDeletePage}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
        <MoveToOptionItem
          action={onOpenMovePagesToPopup}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </StyledList>
      <ChangesBar updatedAt={updatedAt} />
    </Wrapper>
  )
})

export default ListPageSettingsPopup
