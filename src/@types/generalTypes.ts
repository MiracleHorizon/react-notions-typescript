interface ActiveListItem {
  activeItem: string
  onSelect: (title: string) => void
}

enum AppThemes {
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

interface IElementCoords {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export type { ActiveListItem, IElementCoords }
export { AppThemes, ElementPositions }
