import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/useSelectItem'

import Popup from '../index'
import FavoritePageOptions from 'components/Options/OptionsList/FavoritePageOptions'
import CommonPageOptions from 'components/Options/OptionsList/CommonPageOptions'
import MoveToOptionItem from 'components/Options/OptionsList/PageOptionItems/components/MoveToOptionItem'
import PageChangesBar from 'shared/PageChangesBar'
import Separator from 'shared/Separator'
import {
  closePageOptionsPopup,
  openMovePagePopup,
  setMovePagePopupCoords,
} from 'redux/popupsSlice/slice'
import { pageOptionsPopupSelector } from 'redux/popupsSlice/selectors'
import { PageOptionsEnum } from 'redux/popupsSlice/types'
import { Wrapper, ItemContainer } from './PagesOptions.styles'

const PageOptionsPopup: React.FC = () => {
  const { activeItem, onSelectItem } = useSelectItem('')
  const { options, coords } = useSelector(pageOptionsPopupSelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenMovePageToPopup = (): void => {
    dispatch(closePageOptionsPopup())
    dispatch(openMovePagePopup())
    dispatch(setMovePagePopupCoords(coords))
  }

  const handleClickOutside = (): void => {
    dispatch(closePageOptionsPopup())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper {...{ coords }} ref={popupRef}>
        {options === PageOptionsEnum.FAVORITES ? (
          <FavoritePageOptions
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
        ) : (
          <CommonPageOptions activeItem={activeItem} onSelect={onSelectItem} />
        )}
        <Separator />
        <ItemContainer>
          <MoveToOptionItem
            action={onOpenMovePageToPopup}
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
        </ItemContainer>
        <PageChangesBar />
      </Wrapper>
    </Popup>
  )
}

export default PageOptionsPopup
