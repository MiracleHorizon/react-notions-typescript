import { ActiveItemParams } from '../../../../@types/generalTypes'

interface MovePageToModalItemProps extends ActiveItemParams {
  id: number
  icon: string
  title: string
  isHasIcon: boolean
  action: (selectedPageId: number) => void
}

export type { MovePageToModalItemProps }
