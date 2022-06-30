import React, { ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchesValue } from 'redux/recentSearchSlice/slice'
import { closeQuickSearchModal } from 'redux/modalsSlice/slice'
import { ACCOUNT_NAME } from 'utils/accountName'
import searchSvg from 'assets/img/inputs/search.svg'
import {
  StyledForm,
  StyledInput,
  SearchIconBlock,
  SearchIcon,
} from './QuickSearchForm.styles'
import ClearInputButton from '../../../shared/Buttons/ClearInputButton'

interface SearchFormProps {
  inputValue: string
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  onClearInput: () => void
} // Унифицировать.

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
    <StyledForm onSubmit={onSubmitForm}>
      <SearchIconBlock>
        <SearchIcon src={searchSvg} alt='Search' />
      </SearchIconBlock>
      <StyledInput
        type='text'
        placeholder={`Search ${ACCOUNT_NAME}'s Notion...`}
        value={inputValue}
        onChange={onChangeInputValue}
      />
      {inputValue !== '' && (
        <ClearInputButton
          action={onClearInput}
          coords={{ top: '18px', right: '15px' }}
        />
      )}
    </StyledForm>
  )
}

export default QuickSearchForm
