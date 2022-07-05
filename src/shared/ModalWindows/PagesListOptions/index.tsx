import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/useSelectItem'

import Modal from '../ModalWrapper'
import FavoritePageOptions from 'components/Options/OptionsList/FavoritePageOptions'
import CommonPageOptions from 'components/Options/OptionsList/CommonPageOptions'
import MoveToOptionItem from 'components/Options/OptionsList/PageOptionItems/MoveToOptionItem'
import PageChangesBar from 'shared/PageChangesBar'
import Separator from 'shared/Separator'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { pageOptionsModalSelector } from 'redux/modalsSlice/selectors'
import { PageOptionsEnum } from 'redux/modalsSlice/types'
import {
  StyledModalContainer,
  MoveToItemContainer,
} from './PagesListOptions.styles'

const PagesListOptionsModal: React.FC = () => {
  const { activeItem, onSelectItem } = useSelectItem('')
  const { options, coords } = useSelector(pageOptionsModalSelector)
  const modalRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = (): void => {
    dispatch(closePageOptionsModal())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Modal>
      <StyledModalContainer {...{ coords }} ref={modalRef}>
        {options === PageOptionsEnum.FAVORITES ? (
          <FavoritePageOptions
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
        ) : (
          <CommonPageOptions activeItem={activeItem} onSelect={onSelectItem} />
        )}
        <Separator />
        <MoveToItemContainer>
          <MoveToOptionItem activeItem={activeItem} onSelect={onSelectItem} />
        </MoveToItemContainer>
        <PageChangesBar />
      </StyledModalContainer>
    </Modal>
  )
}

export default PagesListOptionsModal
