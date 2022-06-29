import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchesValue } from '../../../redux/recentSearchSlice/slice'
import { closeQuickSearchModal } from '../../../redux/modalsSlice/slice'
import { ACCOUNT_NAME } from '../../../utils/accountName'
import styles from './SearchForm.module.scss'
import searchSvg from '../../../assets/img/inputs/search.svg'
import clearInputSvg from '../../../assets/img/inputs/clearInput.svg'

interface SearchFormProps {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
}

const QuickSearchForm: React.FC<SearchFormProps> = props => {
  const { inputValue, setInputValue } = props

  const dispatch = useDispatch()
  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }
  const onClearInputValue = (): void => setInputValue('')
  const onSubmitForm = (e: FormEvent): void => {
    e.preventDefault()

    dispatch(setSearchesValue(inputValue))
    dispatch(closeQuickSearchModal())
    setInputValue('')
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
          <img src={clearInputSvg} alt='Clear' onClick={onClearInputValue} />
        </div>
      )}
    </form>
  )
}

export default QuickSearchForm
