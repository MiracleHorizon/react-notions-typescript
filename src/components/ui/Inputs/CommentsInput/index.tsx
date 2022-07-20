import React, { FC, memo, useCallback } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import Props from './CommentInput.types'
import { InputContainer, StyledInput } from './CommentsInput.styles'

const CommentsInput: FC<Props> = memo(
  ({ inputRef, inputValue, setInputFocus, onChange }) => {
    const onFocusOnInput = useCallback((): void => {
      setInputFocus && setInputFocus(true)
    }, [setInputFocus])

    const handleClickOutside = useCallback((): void => {
      setInputFocus && setInputFocus(false)
    }, [setInputFocus])

    useOnClickOutside(inputRef, handleClickOutside)

    return (
      <InputContainer>
        <StyledInput
          placeholder='Add a comment...'
          value={inputValue}
          ref={inputRef}
          onFocus={onFocusOnInput}
          onChange={onChange}
        />
      </InputContainer>
    )
  }
)

export default CommentsInput
