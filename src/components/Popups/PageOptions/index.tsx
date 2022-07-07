import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/useSelectItem'

import Modal from '../ModalWrapper'
import FavoritePageOptions from 'components/Options/OptionsList/FavoritePageOptions'
import CommonPageOptions from 'components/Options/OptionsList/CommonPageOptions'
import MoveToOptionItem from 'components/Options/OptionsList/PageOptionItems/components/MoveToOptionItem'
import PageChangesBar from 'shared/PageChangesBar'
import Separator from 'shared/Separator'
import {
  closePageOptionsModal,
  openMovePageToModal,
  setMovePageToPopupCoords,
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
    dispatch(closePageOptionsModal())
    dispatch(openMovePageToModal())
    dispatch(setMovePageToPopupCoords(coords))
  }
  const handleClickOutside = (): void => {
    dispatch(closePageOptionsModal())
    console.log('Клик мимо')
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Modal>
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
    </Modal>
  )
}

export default PageOptionsPopup
