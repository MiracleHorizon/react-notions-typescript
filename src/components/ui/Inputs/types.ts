import React, { ChangeEvent, RefObject } from 'react'

export default interface InputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  type?: 'email' | 'password' | 'url' //!!!!!
  inputValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
  inputRef?: RefObject<HTMLInputElement>
  renderFocusable?: boolean
}
