import { ChangeEvent, useCallback, useState } from 'react'

import { UseInputResult as HookResult } from './useInput.types'

export const useInput = (initialValue: string): HookResult => {
  const [inputValue, setInputValue] = useState<string>(initialValue)

  const onChangeInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setInputValue(e.target.value)
    },
    []
  )

  const onClearInput = (): void => setInputValue('')

  return {
    inputValue,
    onChangeInputValue,
    onClearInput,
  }
}
