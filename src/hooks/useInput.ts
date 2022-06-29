import { ChangeEvent, useState } from 'react'

interface UseInputResult {
  inputValue: string
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  onClearInput: () => void
}

export const useInput = (initialValue: string): UseInputResult => {
  const [inputValue, setInputValue] = useState<string>(initialValue)

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }
  const onClearInput = (): void => setInputValue('')

  return {
    inputValue,
    onChangeInputValue,
    onClearInput,
  }
}
