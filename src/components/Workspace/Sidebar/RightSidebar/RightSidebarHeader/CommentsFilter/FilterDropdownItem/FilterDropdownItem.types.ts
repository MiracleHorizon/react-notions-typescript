import { ActiveListItem } from '../../../../../../../@types/types'

interface DropdownItemProps extends ActiveListItem {
  title: string
  description: string
  onClick: (title: string) => void
}

export type { DropdownItemProps }
