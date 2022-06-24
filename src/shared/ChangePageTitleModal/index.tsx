import React, { FormEvent, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { currentPageSelector } from '../../redux/workSpaceSlice/selectors'
import { closeChangePageTitleModal } from '../../redux/modalsSlice/slice'
import { setCurrentPageTitle } from '../../redux/workSpaceSlice/slice'
import styles from './ChangePageTitleModal.module.scss'

const ChangePageTitleModal: React.FC = () => {
  const { id, pageTitle, pageImg } = useSelector(currentPageSelector)
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()
  const onChangeCurrentPageTitle = () => {
    if (!inputRef.current) return null

    dispatch(setCurrentPageTitle([inputRef.current.value, id]))
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
        <img src={pageImg} alt='Page Img' />
      </div>
      <form onSubmit={onSubmitPageTitle}>
        <input
          type='text'
          placeholder='Untitled'
          value={pageTitle}
          ref={inputRef}
          onChange={onChangeCurrentPageTitle}
        />
      </form>
    </div>
  )
}

export default ChangePageTitleModal
