import React, { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useInput } from 'hooks/useInput'
import OutlineInput from 'shared/Inputs/OutlineInput'
import FilledButton from 'shared/Buttons/Filled'
import { useAppDispatch } from 'redux/store'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  getAllNotionsPages,
  postNewIconByLink,
  setCurrentNotionPage,
} from 'redux/workSpaceSlice/slice'
import { Wrapper, StyledForm } from './DecorLink.styles'

const DecorationLink: React.FC<{ purpose: string }> = ({ purpose }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const { id } = useSelector(currentPageSelector)

  const dispatch = useDispatch()
  const appDispatch = useAppDispatch()

  const onSubmitLinkForm = (e: FormEvent): void => {
    e.preventDefault()

    switch (purpose) {
      case 'Icon':
        appDispatch(postNewIconByLink({ id: `${id}`, icon: inputValue }))
        appDispatch(getAllNotionsPages())
        // addDispatch(setCurrentNotionPage(id))
        break
      case 'Cover':
      // addDispatch()
    }
  }

  return (
    <Wrapper>
      <StyledForm>
        <OutlineInput
          placeholder='Paste an image link...'
          inputValue={inputValue}
          onChange={onChangeInputValue}
          onClear={onClearInput}
        />
        <FilledButton title='Submit' onClickAction={onSubmitLinkForm} />
      </StyledForm>
      <p>Works with any image from the web.</p>
    </Wrapper>
  )
}

export default DecorationLink
