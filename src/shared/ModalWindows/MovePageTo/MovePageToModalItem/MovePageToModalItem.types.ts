import { ActiveListItem } from '../../../../@types/generalTypes'

interface MovePageToModalItemProps extends ActiveListItem {
  id: number
  icon: string
  title: string
  isHasIcon: boolean
  action: (selectedPageId: number) => void
}

export type { MovePageToModalItemProps }
