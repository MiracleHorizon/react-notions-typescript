import React, { FormEvent, Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SwitchPageIconModal from '../SwitchIcon'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import { closeChangePageTitleModal } from '../../../redux/modalsSlice/slice'
import { setIsIconModalOpen } from '../../../redux/pageDecorationSlice/slice'
import { setPageIcon, setPageTitle } from '../../../redux/workSpaceSlice/slice'
import styles from './ChangePageTitle.module.scss'
import emptyIcon from '../../../assets/img/optionsImgs/emptyIcon.svg'
import { isIconModalOpenSelector } from '../../../redux/pageDecorationSlice/selectors'
import { useOnClickOutside } from 'usehooks-ts'

interface IPageTitleModalCoords {
  coords: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
}

const ChangePageTitleModal: React.FC<IPageTitleModalCoords> = ({ coords }) => {
  const { id, pageTitle, icon, isHasIcon } = useSelector(currentPageSelector)
  const inputRef = useRef<HTMLInputElement>(null)
  const isChangePageIconModalOpen = useSelector(isIconModalOpenSelector)

  const dispatch = useDispatch()
  const onChangePageTitle = (): void => {
    if (!inputRef.current) return

    dispatch(setPageTitle([inputRef.current.value, id]))
  }
  const onChangePageIcon = (): void => {
    // dispatch(setPageIcon(''))
    dispatch(setIsIconModalOpen())
  }
  const onSubmitPageTitle = (e: FormEvent): void => {
    e.preventDefault()

    dispatch(closeChangePageTitleModal())
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <Fragment>
      <div className={styles.root} style={{ ...coords }}>
        <div onClick={onChangePageIcon}>
          <img src={isHasIcon ? icon : emptyIcon} alt='Page img' />
        </div>
        <form onSubmit={onSubmitPageTitle}>
          <input
            type='text'
            placeholder='Untitled'
            value={pageTitle}
            ref={inputRef}
            onChange={onChangePageTitle}
          />
        </form>
      </div>
    </Fragment>
  )
}

export default ChangePageTitleModal
