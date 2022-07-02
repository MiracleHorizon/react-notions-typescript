import { AnyAction } from '@reduxjs/toolkit'

interface UseKeyboardBindParams {
  keyboardCode: string
  ctrlKey?: boolean
  shiftKey?: boolean
  altKey?: boolean
  metaKey?: boolean
  action: AnyAction
}

type UseKeyboardBindResult = (e: KeyboardEvent) => void

export type { UseKeyboardBindParams, UseKeyboardBindResult }
