import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useInput } from 'hooks/useInput'

import OutlineInput from 'shared/Inputs/OutlineInput'
import SwitchDecorationNavbar from '../SwitchDecoration/Navbar'
import SwitchDecorationLists from '../SwitchDecoration/DecorLists'
import { iconCategoriesSelector } from 'redux/pageDecorationSlice/selectors'
import {
  refreshIconCategory,
  setIsIconModalClose,
} from 'redux/pageDecorationSlice/slice'
import styles from './ChangePageIcon.module.scss'

const ChangePageIcon: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const categories = useSelector(iconCategoriesSelector)
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')

  const dispatch = useDispatch()
  const handleClickOutside = (): void => {
    dispatch(setIsIconModalClose())
    dispatch(refreshIconCategory())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <div className={styles.root} ref={modalRef}>
      <SwitchDecorationNavbar categories={categories} purpose='icon' />
      <div className={styles.contentBlock}>
        <OutlineInput
          placeholder='Filter...'
          inputValue={inputValue}
          onChange={onChangeInputValue}
          onClear={onClearInput}
        />
        <div className={styles.content}>
          <SwitchDecorationLists />
        </div>
      </div>
    </div>
  )
}

export default ChangePageIcon
