interface ActiveListItem {
  activeItem: string
  onSelect: (title: string) => void
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

export type { ActiveListItem, ElementCoords }
export { Themes, ElementPositions }
