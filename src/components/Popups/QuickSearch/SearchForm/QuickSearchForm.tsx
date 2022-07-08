import React, { ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import ClearInputButton from 'shared/Buttons/ClearInput/ClearInputButton'
import { addSearchesValue } from 'redux/quickSearchSlice/slice'
import { closeQuickSearchPopup } from 'redux/popupsSlice/slice'
import { ACCOUNT_NAME } from 'utils/accountName'
import searchSvg from 'assets/img/inputs/search.svg'
import {
  StyledForm,
  StyledInput,
  SearchIconBlock,
  SearchIcon,
} from './QuickSearchForm.styles'

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

    dispatch(addSearchesValue(inputValue))
    dispatch(closeQuickSearchPopup())
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
