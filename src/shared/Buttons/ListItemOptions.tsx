import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import SidebarListOptions from '../ModalWindows/SidebarListOptions'
import Tooltip from '../Tooltip/Tooltip'
import { favPageOptionsSelector } from 'redux/optionsSlice/selectors'
import { favPagesOptionsModalSelector } from 'redux/modalsSlice/selectors'
import { openFavoritePagesOptionsModal } from 'redux/modalsSlice/slice'
import optionsIcon from 'assets/img/optionsImgs/three-dots.svg'
import styled from 'styled-components'

const StyledItem = styled.div`
  position: absolute;
  right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 3px;

  :hover {
    background: #d3d3d3;
    transition: background 0.2s ease-in-out;
  }
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 1px;
  z-index: 1;
`

const ListItemOptionsButton: React.FC<{ title: string }> = ({ title }) => {
  const optionsButtonRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(optionsButtonRef)

  const isFavPagesOptionsOpen = useSelector(favPagesOptionsModalSelector)
  const favoritePageOptions = useSelector(favPageOptionsSelector)

  const dispatch = useDispatch()
  const onOpenModal = (): void => {
    dispatch(openFavoritePagesOptionsModal())
  }

  return (
    <StyledItem onClick={onOpenModal}>
      <Icon src={optionsIcon} alt='Options' ref={optionsButtonRef} />
      {isHovering && <Tooltip title={`${title}, and more...`} />}
      {isFavPagesOptionsOpen && (
        <SidebarListOptions options={favoritePageOptions} />
      )}
    </StyledItem>
  )
}

export default ListItemOptionsButton
