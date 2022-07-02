import { ChangeEvent } from 'react'

interface UseInputResult {
  inputValue: string
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  onClearInput: () => void
}

export type { UseInputResult }
