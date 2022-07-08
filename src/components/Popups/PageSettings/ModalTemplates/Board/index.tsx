import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useSelectItem } from 'hooks/useSelectItem'
import SwitchFontPanel from './SwitchFontPanel'
import ToggleOptionsList from 'components/Options/ToggleOptionsList/ToggleOptionsList'
import PopupOptionItem from 'components/Options/PopupOptionItem'
import MoveToOptionItem from 'components/Options/OptionsList/PageOptionItems/components/MoveToOptionItem'
import PageChangesBar from 'shared/PageChangesBar'
import CustomizePageSVG from 'shared/SVG/CustomizePage'
import LockPageSVG from 'shared/SVG/LockPage'
import UnlockPageSVG from 'shared/SVG/UnlockPage'
import RemoveFavoriteSvg from 'shared/SVG/RemoveFavorite'
import UnfavoriteStarSVG from 'shared/SVG/UnfavoriteStar'
import LinkSVG from 'shared/SVG/Link'
import DeleteTrashSVG from 'shared/SVG/DeleteTrash'
import Separator from 'shared/Separator'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { closeRightSidebar } from 'redux/sidebarsSlice/slice'
import {
  closePageSettingsPopup,
  openMovePagePopup,
  setMovePagePopupCoords,
} from 'redux/popupsSlice/slice'
import {
  addToFavorite,
  deletePage,
  removeFavorite,
} from 'redux/workSpaceSlice/slice'
import toggleOptionsHandler from 'helpers/toggleOptionsHandler'
import { Wrapper, StyledList } from '../../PageSettingsPopup.styles'
import { showMoveToTrashAlert } from '../../../../../redux/alertsSlice/slice'

const BoardPageSettingsPopup: React.FC = () => {
  const [isLocked, setIsLocked] = useState<boolean>(false) //!
  const { activeItem, onSelectItem } = useSelectItem('')
  const { id, isFavorite, pageSettings } = useSelector(currentPageSelector)
  const toggleOptions = toggleOptionsHandler({ id, ...pageSettings })
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenPageCustomizer = (): void => {}

  const onLockPage = (): void => {
    setIsLocked(true)
  }

  const onUnlockPage = (): void => {
    setIsLocked(false)
  }

  const onAddToFavorite = (): void => {
    dispatch(addToFavorite(id))
  }

  const onRemoveFavorite = (): void => {
    dispatch(removeFavorite(id))
  }

  const onCopyPageLink = (): void => {}

  const onDeletePage = (): void => {
    dispatch(deletePage(id))
    dispatch(closeRightSidebar())
    dispatch(showMoveToTrashAlert())
  }

  const onOpenMovePagesToPopup = (): void => {
    dispatch(setMovePagePopupCoords({ top: '50px', right: '5px' }))
    dispatch(openMovePagePopup())
    dispatch(closePageSettingsPopup)
  }

  const handleClickOutside = (): void => {
    dispatch(closePageSettingsPopup())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Wrapper ref={popupRef}>
      <SwitchFontPanel />
      <ToggleOptionsList
        options={toggleOptions}
        activeItem={activeItem}
        onSelect={onSelectItem}
      />
      <StyledList>
        <PopupOptionItem
          title='Customize page'
          icon={<CustomizePageSVG />}
          action={onOpenPageCustomizer}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
        <PopupOptionItem
          title={isLocked ? 'Unlock page' : 'Lock page'}
          icon={isLocked ? <UnlockPageSVG /> : <LockPageSVG />}
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
              <UnfavoriteStarSVG sizes={{ width: 17, height: 17 }} />
            )
          }
          action={isFavorite ? onRemoveFavorite : onAddToFavorite}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
        <PopupOptionItem
          title='Copy link'
          icon={<LinkSVG />}
          action={onCopyPageLink}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </StyledList>
      <Separator />
      <StyledList>
        <PopupOptionItem
          title='Delete'
          icon={<DeleteTrashSVG />}
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
      <PageChangesBar />
    </Wrapper>
  )
}

export default BoardPageSettingsPopup
