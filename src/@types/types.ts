interface ActiveListItem {
  activeItem: string
  onSelect: (title: string) => void
}

export type { ActiveListItem }
