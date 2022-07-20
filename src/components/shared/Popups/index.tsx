import React, { FC } from 'react'
import { createPortal } from 'react-dom'

import Props from './Popup.types'
import { PopupWrapper, PopupInset } from './Popup.styles'

const Popup: FC<Props> = ({ children, inset }) =>
  createPortal(
    <PopupWrapper>
      {children}
      {inset && <PopupInset />}
    </PopupWrapper>,
    document.getElementById('root') as HTMLElement
  )

export default Popup
