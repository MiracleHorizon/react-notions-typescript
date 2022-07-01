import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as _ from 'lodash'

import PageDecorOption from '../PageDecorOption'
import SwitchPageIconModal from 'shared/ModalWindows/SwitchIcon'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  coversListsSelector,
  isIconModalOpenSelector,
} from 'redux/pageDecorationSlice/selectors'
import { setIsIconModalOpen } from 'redux/pageDecorationSlice/slice'
import { setPageCover } from 'redux/workSpaceSlice/slice'
import { getAllCovers } from 'utils/helpers/getAllCovers'
import addIconSvg from 'assets/img/addIcon.svg'
import coverSvg from 'assets/img/cover.svg'
import commentSvg from 'assets/img/optionsImgs/comments.svg'
import styles from './PageOptionsPanel.module.scss'

const PageOptionsPanel: React.FC = () => {
  const { title, icon, isHasCover, isHasIcon, isHasComments, id } =
    useSelector(currentPageSelector)
  const covers = useSelector(coversListsSelector)
  const isSwitchPageIconModalOpen = useSelector(isIconModalOpenSelector)

  const dispatch = useDispatch()
  const onOpenSwitchPageIconModal = (): void => {
    dispatch(setIsIconModalOpen())
  }

  const onAddRandomCover = (): void => {
    dispatch(setPageCover({ cover: _.sample(getAllCovers(covers)), id }))
  }
  const onAddRandomIcon = (): void => {} //! icon!

  return (
    <div className={styles.options}>
      {isHasIcon && (
        <div>
          <div className={styles.pageIcon} onClick={onOpenSwitchPageIconModal}>
            <img src={icon ? icon : ''} alt='Page icon' />
          </div>
          {isSwitchPageIconModalOpen && <SwitchPageIconModal />}
        </div>
      )}
      <div className={styles.optionsBlock}>
        {!isHasIcon && (
          <PageDecorOption
            iconImg={addIconSvg}
            optionsTitle='icon'
            onClickAction={onAddRandomIcon}
          />
        )}
        {!isHasCover && (
          <PageDecorOption
            iconImg={coverSvg}
            optionsTitle='cover'
            onClickAction={onAddRandomCover}
          />
        )}
        {!isHasComments && (
          <PageDecorOption iconImg={commentSvg} optionsTitle='comment' />
        )}
      </div>
      <div className={styles.pageTitle}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default PageOptionsPanel
