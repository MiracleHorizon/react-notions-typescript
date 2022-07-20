import { Dispatch, RefObject, SetStateAction } from 'react'

interface ActiveListItem {
  activeItem: string
  onSelect: (title: string) => void
} //!

interface ActiveItem {
  title: string
  id: string
}

interface ActiveItemParams {
  activeItem: ActiveItem
  onSelectActiveItem: (params: ActiveItem) => void
}

enum Themes {
  DARK = 'Dark',
  LIGHT = 'Light',
  SYSTEM = 'System',
}

enum ElementPositions {
  TOP = 'top',
  LEFT = 'left',
  BOTTOM = 'bottom',
  RIGHT = 'right',
}

interface ElementCoords {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export type { ActiveItem, ActiveListItem, ActiveItemParams, ElementCoords }
export { Themes, ElementPositions }

export type SetState<T> = Dispatch<SetStateAction<T>>
export type NodeRef<T> = RefObject<T>
