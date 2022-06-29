import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import SidebarCategoryTooltip from '../../Tooltips/SidebarCategory'
import styles from './ListItemOptions.module.scss'
import optionsIcon from '../../../assets/img/optionsImgs/three-dots.svg'
import { useDispatch, useSelector } from 'react-redux'
import { favoritePageOptionsSelector } from '../../../redux/optionsSlice/selectors'
import SidebarListOptions from '../../ModalWindows/SidebarListOptions'
import { favoritePagesOptionsModalSelector } from '../../../redux/modalsSlice/selectors'
import { openFavoritePagesOptionsModal } from '../../../redux/modalsSlice/slice'

interface OptionsButtonProps {
  title: string
}

const ListItemOptionsButton: React.FC<OptionsButtonProps> = ({ title }) => {
  const optionsButtonRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(optionsButtonRef)
  const isFavoritePagesOptionsOpen = useSelector(
    favoritePagesOptionsModalSelector
  )
  const favoritePagesOptions = useSelector(favoritePageOptionsSelector)

  const dispatch = useDispatch()
  const onOpenModal = (): void => {
    dispatch(openFavoritePagesOptionsModal())
  }

  // switch (title) {
  //   case 'Delete, duplicate'
  // }

  return (
    <div className={styles.options} onClick={onOpenModal}>
      <img src={optionsIcon} ref={optionsButtonRef} alt='Options' />
      {isHovering && <SidebarCategoryTooltip title={title} />}
      {isFavoritePagesOptionsOpen && (
        <SidebarListOptions options={favoritePagesOptions} />
      )}
    </div>
  )
}

export default ListItemOptionsButton
