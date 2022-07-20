import { ChangeEvent } from 'react'

export interface UseInputResult {
  inputValue: string
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  onClearInput: () => void
}
