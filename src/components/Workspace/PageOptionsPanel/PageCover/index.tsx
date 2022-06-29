import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import SwitchPageCoverModal from '../../../../shared/ModalWindows/SwitchCover'
import { currentPageSelector } from '../../../../redux/workSpaceSlice/selectors'
import { isCoverModalOpenSelector } from '../../../../redux/pageDecorationSlice/selectors'
import { setIsCoverModalOpen } from '../../../../redux/pageDecorationSlice/slice'
import styles from './PageCover.module.scss'

const PageCover: React.FC = () => {
  const { isHasCover, cover } = useSelector(currentPageSelector)
  const isModalOpen = useSelector(isCoverModalOpenSelector)

  const coverRef = useRef<HTMLDivElement>(null) //! bar
  const isHovering = useHover(coverRef)

  const dispatch = useDispatch()
  const onOpenModal = (): void => {
    dispatch(setIsCoverModalOpen())
  }

  return (
    <Fragment>
      <div className={styles.coverBlock} ref={coverRef}>
        <div className={styles.pageCover} style={{ background: cover }} />
        <div className={styles.coverOptionsBar}>
          {isHovering && isHasCover && (
            <div className={styles.coverOptions}>
              <div
                className={styles.option}
                role='button'
                onClick={onOpenModal}
              >
                <span>Change cover</span>
              </div>
              <div className={styles.option} role='button'>
                <span>Reposition</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && <SwitchPageCoverModal />}
    </Fragment>
  )
}

export default PageCover
//! Убрать блок модалки и поставить его здесь
