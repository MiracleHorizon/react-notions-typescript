interface ActiveItem {
  title: string
  id: number
}

interface ActiveItemParams {
  activeItem: ActiveItem
  onSelectActiveItem: (params: ActiveItem) => void
}

interface MovePageToModalItemProps extends ActiveItemParams {
  id: number
  icon: string
  title: string
  isHasIcon: boolean
  action: (selectedPageId: number) => void
}

export type { MovePageToModalItemProps, ActiveItem, ActiveItemParams }
