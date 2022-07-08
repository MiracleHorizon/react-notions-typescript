interface ActiveListItem {
  activeItem: string
  onSelect: (title: string) => void
} //!

interface ActiveItem {
  title: string
  id: number
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
