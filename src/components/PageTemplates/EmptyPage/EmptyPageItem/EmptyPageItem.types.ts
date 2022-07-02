import { ActiveListItem } from '../../../../@types/types'

interface EmptyPageItemProps extends ActiveListItem {
  title: string
  img: string
  action: () => void
}

interface StyledItemProps {
  isActive: boolean
}

export type { EmptyPageItemProps, StyledItemProps }
