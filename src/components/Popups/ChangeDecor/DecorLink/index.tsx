import React, { FormEvent } from 'react'

import { useInput } from 'hooks/useInput'
import OutlineInput from 'shared/Inputs/OutlineInput'
import FilledButton from 'shared/Buttons/Filled'
import { Wrapper, StyledForm } from './DecorLink.styles'

const DecorationLink: React.FC = () => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')

  const onSubmitLinkForm = (e: FormEvent): void => {
    e.preventDefault()
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
