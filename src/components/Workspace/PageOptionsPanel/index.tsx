import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as _ from 'lodash'

import PageDecorOption from '../../PageDecorOption'
import ChangePageIconModal from '../../../shared/ModalWindows/ChangePageIcon'
import { currentPageSelector } from '../../../redux/workSpaceSlice/selectors'
import { coversListsSelector } from '../../../redux/pageDecorationSlice/selectors'
import { setPageCover } from '../../../redux/workSpaceSlice/slice'
import { getAllCovers } from '../../../utils/helpers/getAllCovers'
import addIconSvg from '../../../assets/img/addIcon.svg'
import coverSvg from '../../../assets/img/cover.svg'
import commentSvg from '../../../assets/img/comments.svg'
import styles from './PageOptionsPanel.module.scss'

const PageOptionsPanel: React.FC = () => {
  const { pageTitle, icon, isHasCover, isHasIcon, isHasComments, id } =
    useSelector(currentPageSelector)
  const covers = useSelector(coversListsSelector)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const onChangeIcon = (): void => {
    setIsModalOpen(!isModalOpen)
  }

  const dispatch = useDispatch()
  const onAddRandomCover = (): void => {
    dispatch(setPageCover({ cover: _.sample(getAllCovers(covers)), id }))
  }
  const onAddRandomIcon = (): void => {}

  return (
    <div className={styles.options}>
      {isHasIcon && (
        <div>
          <div className={styles.pageIcon} onClick={onChangeIcon}>
            <img src={icon} alt='Page icon' />
          </div>
          {isModalOpen && <ChangePageIconModal />}
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
        <h1>{pageTitle}</h1>
      </div>
    </div>
  )
}

export default PageOptionsPanel
