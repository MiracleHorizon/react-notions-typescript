import React from 'react'
import OutlineButton from './index'
import { OutlineButtonProps } from './OutlineButton.types'
import { redOutlineButtonsStyles } from './styles'

const RedOutlineButton: React.FC<OutlineButtonProps> = props => (
  <OutlineButton {...props} {...redOutlineButtonsStyles} />
)

export default RedOutlineButton
