import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPageTitle } from '../../redux/workSpaceSlice/slice'

import styles from './ChangePageTitlePopup.module.scss'

interface IPopupInputProps {
  value: string
}

const ChangePageTitlePopup: React.FC<IPopupInputProps> = ({ value }) => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  // e: React.ChangeEvent<HTMLInputElement>

  const onChangeCurrentPageTitle = () => {
    if (!inputRef.current) return null

    if (inputRef.current.value === '') {
      inputRef.current.value = ''
      dispatch(setCurrentPageTitle('Untitled'))
      inputRef.current.placeholder = 'Untitled'
    } else {
      dispatch(setCurrentPageTitle(inputRef.current.value))
    }
  }

  return (
    <div className={styles.root}>
      <input
        type='text'
        value={value}
        ref={inputRef}
        onChange={onChangeCurrentPageTitle}
      />
    </div>
  )
}

export default ChangePageTitlePopup
