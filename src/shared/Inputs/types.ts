import { ChangeEvent, RefObject } from 'react'

export default interface InputProps {
  placeholder: string
  inputValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
  inputRef?: RefObject<HTMLInputElement>
}
