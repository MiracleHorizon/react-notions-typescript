import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSelectItem } from 'hooks/useSelectItem'

import ToggleFontPanel from './ToggleFontPanel'
import ToggleOptionsList from 'components/Options/ToggleOptionsList/ToggleOptionsList'
import PopupOptionItem from 'components/Options/PopupOptionItem/PopupOptionItem'
import MoveToOptionItem from 'components/Options/OptionsList/OptionItem/MoveToOptionItem'
import PageChanges from 'components/Options/PageChanges'
import CustomizePageSVG from 'shared/SVG/LightThene/CustomizePage'
import LockPageSVG from 'shared/SVG/LightThene/LockPage'
import UnlockPageSVG from 'shared/SVG/LightThene/UnlockPage'
import RemoveFavoriteSVG from 'shared/SVG/LightThene/RemoveFavorite'
import UnfavoriteStarSVG from 'shared/SVG/LightThene/UnfavoriteStar'
import LinkSVG from 'shared/SVG/LightThene/Link'
import DeleteTrashSVG from 'shared/SVG/LightThene/DeleteTrash'
import Separator from 'shared/Separator'
import toggleOptionsHandler from 'utils/helpers/toggleOptionsHandler'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  addToFavorite,
  deletePage,
  removeFavorite,
  setCurrentPage,
} from 'redux/workSpaceSlice/slice'
import { Wrapper, StyledList } from '../../PageSettingsPopup.styles'

const BoardPageModal: React.FC = () => {
  const { id, isFavorite, isFullWidth, isSmallText } =
    useSelector(currentPageSelector)
  const { activeItem, onSelectItem } = useSelectItem('')
  const [isLocked, setIsLocked] = useState<boolean>(false) //!
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
    dispatch(setCurrentPage(id - 1)) //!
  }

  const toggleOptions = toggleOptionsHandler({
    id,
    isSmallText,
    isFullWidth,
  })

  return (
    <Wrapper>
      <ToggleFontPanel />
      <ToggleOptionsList
        options={toggleOptions}
        activeItem={activeItem}
        onSelect={onSelectItem}
      />
      <Separator />
      <StyledList>
        <PopupOptionItem
          title='Customize page'
          SVGComponent={<CustomizePageSVG />}
          action={onOpenPageCustomizer}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
        <PopupOptionItem
          title={isLocked ? 'Unlock page' : 'Lock page'}
          SVGComponent={isLocked ? <UnlockPageSVG /> : <LockPageSVG />}
          action={isLocked ? onUnlockPage : onLockPage}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </StyledList>
      <Separator />
      <StyledList>
        <PopupOptionItem
          title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          SVGComponent={
            isFavorite ? (
              <RemoveFavoriteSVG />
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
          SVGComponent={<LinkSVG />}
          action={onCopyPageLink}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </StyledList>
      <Separator />
      <StyledList>
        <PopupOptionItem
          title='Delete'
          SVGComponent={<DeleteTrashSVG />}
          action={onDeletePage}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
        <MoveToOptionItem activeItem={activeItem} onSelect={onSelectItem} />
      </StyledList>
      <PageChanges />
    </Wrapper>
  )
}

export default BoardPageModal
