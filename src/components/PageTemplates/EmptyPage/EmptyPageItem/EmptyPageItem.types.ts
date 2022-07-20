import { FC } from 'react'
import { ActiveListItem } from 'types'

export default interface EmptyPageItemProps extends ActiveListItem {
  title: string
  IconSVG: FC
  action: () => void
}

export interface StyledItemProps {
  isActive: boolean
}
