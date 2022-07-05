import React, { FormEvent, Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import SwitchPageIconModal from '../SwitchIcon'
import EmptyPageIconSVG from 'shared/SVG/EmptyPage'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { isIconModalOpenSelector } from 'redux/pageDecorationSlice/selectors'
import { closeChangePageTitleModal } from 'redux/modalsSlice/slice'
import { setIsIconModalOpen } from 'redux/pageDecorationSlice/slice'
import { setPageIcon, setPageTitle } from 'redux/workSpaceSlice/slice'
import styles from './ChangePageTitle.module.scss'

interface IPageTitleModalCoords {
  coords: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
} //!

const ChangePageTitleModal: React.FC<IPageTitleModalCoords> = ({ coords }) => {
  const { id, title, icon, isHasIcon } = useSelector(currentPageSelector)
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const isChangePageIconModalOpen = useSelector(isIconModalOpenSelector)
  const dispatch = useDispatch()

  const onChangePageTitle = (): void => {
    if (!inputRef.current) return
    const pageTitle = inputRef.current.value

    dispatch(setPageTitle({ title: pageTitle, id }))
  }
  const onChangePageIcon = (): void => {
    // dispatch(setPageIcon(''))
    dispatch(setIsIconModalOpen())
  }
  const onSubmitPageTitle = (e: FormEvent): void => {
    e.preventDefault()

    dispatch(closeChangePageTitleModal())
  }
  const handlerClickOutside = (): void => {
    dispatch(closeChangePageTitleModal())
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  useOnClickOutside(modalRef, handlerClickOutside)
  useEffect(() => {}, [])

  return (
    <Fragment>
      <div ref={modalRef} className={styles.root} style={{ ...coords }}>
        <div onClick={onChangePageIcon}>
          {isHasIcon ? (
            <img src={icon} alt='Page icon' />
          ) : (
            <EmptyPageIconSVG
              {...{ sizes: { width: 18, height: 18 }, transparency: 0.85 }}
            />
          )}
        </div>
        <form onSubmit={onSubmitPageTitle}>
          <input
            type='text'
            placeholder='Untitled'
            value={title}
            ref={inputRef}
            onChange={onChangePageTitle}
          />
        </form>
      </div>
    </Fragment>
  )
}

export default ChangePageTitleModal
