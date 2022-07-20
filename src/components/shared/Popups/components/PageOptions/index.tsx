import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from '../../index'
import FavoritePageOptions from 'components/shared/Options/OptionsList/FavoritePageOptions'
import CommonPageOptions from 'components/shared/Options/OptionsList/CommonPageOptions'
import MoveToOptionItem from 'components/shared/Options/OptionsList/PageOptionItems/components/MoveToOptionItem'
import ChangesBar from 'components/shared/ChangesBar'
import { Separator } from 'components/ui'

import { useSelectItem } from 'hooks/mouse/useSelectItem'
import { PageOptionsEnum } from 'redux/types'
import { pageOptionsPopupSelector } from 'redux/selectors'
import {
  closePageOptionsPopup,
  openMovePagePopup,
  setMovePagePopupCoords,
  setMovePagePopupEntity,
} from 'redux/actions'
import { Wrapper, ItemContainer } from './PagesOptions.styles'

const PageOptionsPopup: FC = memo(() => {
  const { options, coords, page } = useSelector(pageOptionsPopupSelector)
  const { activeItem, onSelectItem } = useSelectItem('')
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenMovePageToPopup = useCallback((): void => {
    dispatch(setMovePagePopupCoords(coords))
    dispatch(setMovePagePopupEntity(page))
    dispatch(closePageOptionsPopup())
    dispatch(openMovePagePopup())
  }, [dispatch, coords])

  const handleClickOutside = useCallback((): void => {
    dispatch(closePageOptionsPopup())
  }, [dispatch])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef} coords={coords}>
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
        <ChangesBar updatedAt={page ? page.updatedAt : ''} />
      </Wrapper>
    </Popup>
  )
})

export default PageOptionsPopup
