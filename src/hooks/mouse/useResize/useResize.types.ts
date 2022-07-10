import { RefObject } from 'react'
import { AnyAction } from '@reduxjs/toolkit'

export interface UseResizeParams {
  resizeDirection: 'Left' | 'Right' | 'Top' | 'Bottom'
  references: {
    resizer: RefObject<HTMLDivElement>
    node: RefObject<HTMLDivElement>
  }
  setWidth: (width: number) => AnyAction
  restrictions: {
    minWidth: number
    maxWidth: number
  }
}
