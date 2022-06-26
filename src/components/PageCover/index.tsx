import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import styles from './PageCover.module.scss'
import {
  setIsModalClose,
  setIsModalOpen,
} from '../../redux/switchCoverSlice/slice'

interface IPageCoverProps {
  cover: string
}

const PageCover: React.FC<IPageCoverProps> = ({ cover }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const onOpenSwitchCoverModal = () => dispatch(setIsModalOpen())

  useEffect(() => {
    const onToggleModal = (e: MouseEvent) => {
      if (!modalRef.current) return

      if (!e.composedPath().includes(modalRef.current)) {
        // dispatch(setIsModalClose())
      }
    }

    document.body.addEventListener('click', onToggleModal)

    return () => {
      document.body.removeEventListener('click', onToggleModal)
    }
  }, [dispatch])

  return (
    <div className={styles.coverBlock} ref={modalRef}>
      <div className={styles.pageCover} style={{ background: cover }} />
      <div className={styles.coverOptionsBar}>
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
      </div>
    </div>
  )
}

export default PageCover
