import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SwitchCoverModal from '../../shared/ModalWindows/SwitchCover'
import {
  setIsModalClose,
  setIsModalOpen,
} from '../../redux/switchCoverSlice/slice'
import { currentPageSelector } from '../../redux/workSpaceSlice/selectors'
import { isModalOpenSelector } from '../../redux/switchCoverSlice/selectors'
import styles from './PageCover.module.scss'

const PageCover: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const isSwitchCoverModalOpen = useSelector(isModalOpenSelector)
  const { cover } = useSelector(currentPageSelector)

  const dispatch = useDispatch()
  const onOpenSwitchCoverModal = (): void => {
    dispatch(setIsModalOpen())
  }

  useEffect(() => {
    const onToggleModal = (e: MouseEvent) => {
      if (!modalRef.current) return

      if (!e.composedPath().includes(modalRef.current)) {
        dispatch(setIsModalClose())
      }
    }

    document.body.addEventListener('click', onToggleModal)

    return () => {
      document.body.removeEventListener('click', onToggleModal)
    }
  }, [dispatch])

  return (
    <div className={styles.coverBlock}>
      <div className={styles.pageCover} style={{ background: cover }} />
      <div className={styles.coverOptionsBar}>
        <div ref={modalRef}>
          <div className={styles.coverOptions}>
            <div
              className={styles.option}
              role='button'
              onClick={onOpenSwitchCoverModal}
            >
              Change cover
            </div>
            <div className={styles.option} role='button'>
              Reposition
            </div>
          </div>
          {isSwitchCoverModalOpen && <SwitchCoverModal />}
        </div>
      </div>
    </div>
  )
}

export default PageCover
//! Убрать блок модалки и поставить его здесь
