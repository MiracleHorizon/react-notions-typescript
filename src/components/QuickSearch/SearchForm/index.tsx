import React, { ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchesValue } from 'redux/recentSearchSlice/slice'
import { closeQuickSearchModal } from 'redux/modalsSlice/slice'
import { ACCOUNT_NAME } from 'utils/accountName'
import searchSvg from 'assets/img/inputs/search.svg'
import clearInputSvg from 'assets/img/inputs/clearInput.svg'

import styles from './SearchForm.module.scss'

interface SearchFormProps {
  inputValue: string
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  onClearInput: () => void
}

const QuickSearchForm: React.FC<SearchFormProps> = props => {
  const { inputValue, onChangeInputValue, onClearInput } = props

  const dispatch = useDispatch()
  const onSubmitForm = (e: FormEvent): void => {
    e.preventDefault()

    dispatch(setSearchesValue(inputValue))
    dispatch(closeQuickSearchModal())
    onClearInput()
  }

  return (
    <form className={styles.searchBlock} onSubmit={onSubmitForm}>
      <div className={styles.searchImg}>
        <img src={searchSvg} alt='Search' />
      </div>
      <input
        type='text'
        placeholder={`Search ${ACCOUNT_NAME}'s Notion...`}
        value={inputValue}
        onChange={onChangeInputValue}
      />
      {inputValue !== '' && (
        <div className={styles.clearImg}>
          <img src={clearInputSvg} alt='Clear' onClick={onClearInput} />
        </div>
      )}
    </form>
  )
}

export default QuickSearchForm
