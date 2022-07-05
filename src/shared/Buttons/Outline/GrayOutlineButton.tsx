import React from 'react'
import OutlineButton from './index'
import { OutlineButtonProps } from './OutlineButton.types'
import { grayOutlineButtonStyles } from './styles'

const GrayOutlineButton: React.FC<OutlineButtonProps> = props => (
  <OutlineButton {...props} {...grayOutlineButtonStyles} />
)

export default GrayOutlineButton
