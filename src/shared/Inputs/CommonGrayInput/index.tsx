import React from 'react'
import InputProps from '../types'
import StyledInput from './CommonGrayInput.styles'

const CommonGrayInput: React.FC<InputProps> = props => {
  const { placeholder, inputValue, onChange, inputRef } = props

  return (
    <StyledInput
      type='text'
      ref={inputRef}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
    />
  )
}

export default CommonGrayInput
