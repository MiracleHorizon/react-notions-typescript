import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { ACCOUNT_NAME } from '../../../utils/accountName'
import styles from './SearchForm.module.scss'
import searchSvg from '../../../assets/img/search.svg'
import clearInputSvg from '../../../assets/img/clearInput.svg'

interface SearchFormProps {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
}

const QuickSearchForm: React.FC<SearchFormProps> = props => {
  const { inputValue, setInputValue } = props

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }
  const onClearInputValue = (): void => setInputValue('')

  return (
    <div className={styles.searchBlock}>
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
    </div>
  )
}

export default QuickSearchForm
