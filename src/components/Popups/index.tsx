import React from 'react'
import { createPortal } from 'react-dom'

import Props from './Popup.types'
import { PopupWrapper, PopupInset } from './Popup.styles'

const Popup: React.FC<Props> = ({ children, isHasInset }) =>
  createPortal(
    <PopupWrapper>
      {children}
      {isHasInset && <PopupInset />}
    </PopupWrapper>,
    document.getElementById('root') as HTMLElement
  )

export default Popup
