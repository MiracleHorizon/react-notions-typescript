import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/useSelectItem'

import Modal from '../Modal'
import MoveToOptionItem from 'components/Options/PopupOptionItem/MoveToOptionItem'
import PageChangesBar from 'shared/PageChangesBar'
import { closePageOptionsModal } from 'redux/modalsSlice/slice'
import { pageOptionsModalSelector } from 'redux/modalsSlice/selectors'
import { PagesListOptionsProps } from './PagesListOptions.types'
import { StyledModalContainer } from './PagesListOptions.styles'

const PagesListOptionsModal: React.FC<PagesListOptionsProps> = ({ coords }) => {
  const { activeItem, onSelectItem } = useSelectItem('')
  const modalRef = useRef<HTMLDivElement>(null)
  const options = useSelector(pageOptionsModalSelector).options
  const dispatch = useDispatch()

  const handleClickOutside = (): void => {
    dispatch(closePageOptionsModal())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Modal>
      <StyledModalContainer {...{ coords }} ref={modalRef}>
        {/*{options === 'common' ? '' : ''}*/}
        <MoveToOptionItem activeItem={activeItem} onSelect={onSelectItem} />
        <PageChangesBar />
      </StyledModalContainer>
    </Modal>
  )
}

export default PagesListOptionsModal
