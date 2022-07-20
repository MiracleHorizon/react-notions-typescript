import React, { FC, memo } from 'react'
import Props from '../types'
import StyledInput from './CommonGrayInput.styles'

const CommonGrayInput: FC<Props> = memo(
  ({ placeholder, inputRef, inputValue, onChange }) => (
    <StyledInput
      type='text'
      placeholder={placeholder}
      ref={inputRef}
      value={inputValue}
      onChange={onChange}
    />
  )
)

export default CommonGrayInput
