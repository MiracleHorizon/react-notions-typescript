import React from 'react'
import { useSelector } from 'react-redux'
import { useSelectItem } from 'hooks/useSelectItem'

import OptionsList from 'components/OptionsList'
import ToggleFontPanel from './ToggleFontPanel'
import ToggleOptionsList from 'components/ToggleOptionsList/ToggleOptionsList'
import MoveToOptionItem from 'components/OptionsList/OptionItem/MoveToOptionItem'
import Separator from '../../../../Separator'
import PageChanges from 'components/PageChanges'

import toggleOptionsHandler from 'utils/helpers/toggleOptionsHandler'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { BOARD_PAGE_OPTIONS } from 'redux/optionsSlice/optionsStorage'
import styles from '../../PageSettings.module.scss'

const BoardPageModal: React.FC = () => {
  const { isFullWidth, isSmallText, id } = useSelector(currentPageSelector)
  const { activeItem, onSelectItem } = useSelectItem('')

  if (!id) return <></> //!!!!!!!

  const toggleOptions = toggleOptionsHandler({ id, isSmallText, isFullWidth }!)

  return (
    <div className={styles.pageSettings}>
      <ToggleFontPanel />
      <ToggleOptionsList
        options={toggleOptions}
        activeItem={activeItem}
        onSelect={onSelectItem}
      />
      <Separator />
      <OptionsList
        options={BOARD_PAGE_OPTIONS.pageCustomizeOptions!}
        activeItem={activeItem}
        onSelect={onSelectItem}
      />
      <OptionsList
        options={BOARD_PAGE_OPTIONS.pageChangesOptions}
        activeItem={activeItem}
        onSelect={onSelectItem}
      />
      <OptionsList
        options={BOARD_PAGE_OPTIONS.pageShareOptions}
        activeItem={activeItem}
        onSelect={onSelectItem}
      />
      <MoveToOptionItem activeItem={activeItem} onSelect={onSelectItem} />
      <PageChanges />
    </div>
  )
}

export default BoardPageModal
