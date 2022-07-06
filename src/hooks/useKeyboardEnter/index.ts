import { useCallback } from 'react'
import {
  UseKeyboardEnterParams as HookParams,
  UseKeyboardEnterResult as HookResult,
} from './useKeyboardEnter.types'

export const useKeyboardEnter = (params: HookParams): HookResult => {
  const { activeItem, options } = params

  return useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return

      const activeOption = options.find(({ title }) => title === activeItem)
      if (activeOption) activeOption.action()
    },
    [activeItem, options]
  )
}
