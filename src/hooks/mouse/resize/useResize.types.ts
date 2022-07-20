import { RefObject } from 'react'
import { AnyAction } from '@reduxjs/toolkit'

export enum ResizeDirections {
  TOP = 'Top',
  BOTTOM = 'Bottom',
  LEFT = 'Left',
  RIGHT = 'Right',
}

export interface UseResizeParams {
  direction: ResizeDirections
  references: {
    resizer: RefObject<HTMLDivElement> //!
    node: RefObject<HTMLDivElement> //!
  }
  setWidth: (width: number) => AnyAction
  restrictions: {
    minWidth: number
    maxWidth: number
  }
}
