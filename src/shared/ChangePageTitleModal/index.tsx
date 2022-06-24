import React, { FormEvent, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentPageSelector } from '../../redux/workSpaceSlice/selectors'
import { closeChangePageTitleModal } from '../../redux/modalsSlice/slice'
import { setPageTitle } from '../../redux/workSpaceSlice/slice'
import styles from './ChangePageTitleModal.module.scss'
import emptyIcon from '../../assets/img/emptyIcon.svg'

const ChangePageTitleModal: React.FC = () => {
  const { id, pageTitle, icon, isHasIcon } = useSelector(currentPageSelector)
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()
  const onChangePageTitle = () => {
    if (!inputRef.current) return null

    dispatch(setPageTitle([inputRef.current.value, id]))
  }
  const onSubmitPageTitle = (e: FormEvent) => {
    e.preventDefault()

    dispatch(closeChangePageTitleModal())
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className={styles.root}>
      <div>
        <img src={isHasIcon ? icon : emptyIcon} alt='Page img' />
      </div>
      <form onSubmit={onSubmitPageTitle}>
        <input
          type='text'
          placeholder='Untitled'
          value={pageTitle}
          ref={inputRef}
          onChange={onChangePageTitle}
        />
      </form>
    </div>
  )
}

export default ChangePageTitleModal
