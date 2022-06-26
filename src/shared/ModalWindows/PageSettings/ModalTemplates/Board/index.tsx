import React from 'react'
import { useSelector } from 'react-redux'

import OptionsList from '../../../../../components/OptionsList'
import ToggleFontPanel from './ToggleFontPanel'
import ToggleOptionsList from '../../../../../components/ToggleOptionsList'
import MoveToOptionItem from '../../../../../components/OptionsList/OptionItem/MoveToOptionItem'
import Separator from '../../../../Separator'
import PageChanges from '../../../../../components/PageChanges'
import toggleOptionsHandler from '../../../../../utils/helpers/toggleOptionsHandler'
import { currentPageSelector } from '../../../../../redux/workSpaceSlice/selectors'
import { BOARD_PAGE_OPTIONS } from '../../../../../redux/optionsSlice/optionsStorage'
import styles from '../../PageSettings.module.scss'

const BoardPageModal: React.FC = () => {
  const { isFullWidth, isSmallText, id } = useSelector(currentPageSelector)
  const toggleOptions = toggleOptionsHandler({ id, isSmallText, isFullWidth })

  return (
    <div className={styles.pageSettings}>
      <ToggleFontPanel />
      <ToggleOptionsList options={toggleOptions} />
      <Separator />
      <OptionsList options={BOARD_PAGE_OPTIONS.pageCustomizeOptions!} />
      <OptionsList options={BOARD_PAGE_OPTIONS.pageChangesOptions} />
      <OptionsList options={BOARD_PAGE_OPTIONS.pageShareOptions} />
      <MoveToOptionItem />
      <PageChanges />
    </div>
  )
}

export default BoardPageModal
