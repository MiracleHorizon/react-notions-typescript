import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useInput } from 'hooks/useInput'

import SwitchDecorationNavbar from '../SwitchDecoration/Navbar'
import OutlineInput from 'shared/Inputs/OutlineInput'
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
      <OutlineInput
        placeholder='Filter...'
        inputValue={inputValue}
        onChange={onChangeInputValue}
        onClear={onClearInput}
      />
    </div>
  )
}

export default ChangePageIcon
