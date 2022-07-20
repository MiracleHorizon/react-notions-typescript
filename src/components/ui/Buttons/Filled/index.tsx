import React, { FC, memo } from 'react'
import Props from './FilledButton.types'
import * as Button from './FilledButton.styles'

const FilledButton: FC<Props> = memo(({ onClickAction, title, colorInfo }) => (
  <Button.Container onClick={onClickAction} colorInfo={colorInfo}>
    <Button.Title>{title}</Button.Title>
  </Button.Container>
))

export default FilledButton
