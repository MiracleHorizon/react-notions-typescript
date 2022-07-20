import React, { FC, memo, useCallback } from 'react'

import Props from './SendCommentOptions.types'
import { AttachFileButton, SendButton } from 'components/ui'
import Container from './SendCommentOptions.styles'

const SendCommentOptions: FC<Props> = memo(
  ({ inputValue, onSubmit, onAttach }) => {
    const onMouseDown = useCallback((e: React.MouseEvent) => {
      e.stopPropagation()
    }, [])

    return (
      <Container onMouseDown={onMouseDown}>
        <SendButton isActive={inputValue !== ''} action={onSubmit} />
        <AttachFileButton onClickAction={onAttach} />
      </Container>
    )
  }
)

export default SendCommentOptions
