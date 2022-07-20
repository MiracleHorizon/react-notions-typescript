import React, { FC, FormEvent, memo, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Props from './SearchForm.types'
import { ClearInputButton } from 'components/ui'
import { QuickSearchLoupeSvg } from 'components/ui/SVG'
import { addSearchesValue, closeQuickSearchPopup } from 'redux/actions'
import { userSelector } from 'redux/selectors'
import {
  StyledForm,
  StyledInput,
  SearchIconBlock,
} from './QuickSearchForm.styles'

const QuickSearchForm: FC<Props> = memo(props => {
  const { inputValue, onChangeInputValue, onClearInput } = props
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  const clearInputButtonCoords = useMemo(() => {
    return { top: '18px', right: '15px' }
  }, [])

  const onSubmitForm = useCallback(
    (e: FormEvent): void => {
      e.preventDefault()

      dispatch(addSearchesValue(inputValue))
      dispatch(closeQuickSearchPopup())
      onClearInput()
    },
    [dispatch, inputValue, onClearInput]
  )

  return (
    <StyledForm onSubmit={onSubmitForm}>
      <SearchIconBlock>
        <QuickSearchLoupeSvg />
      </SearchIconBlock>
      <StyledInput
        type='text'
        placeholder={`Search ${user?.fullName}'s Notion...`}
        value={inputValue}
        onChange={onChangeInputValue}
      />
      {inputValue !== '' && (
        <ClearInputButton
          action={onClearInput}
          coords={clearInputButtonCoords}
        />
      )}
    </StyledForm>
  )
})

export default QuickSearchForm
