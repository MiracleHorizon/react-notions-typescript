interface ActiveListItem {
  activeItem: string
  onSelect: (title: string) => void
}

interface IElementCoords {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export type { ActiveListItem, IElementCoords }
