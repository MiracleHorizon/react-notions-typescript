import { FC } from 'react'
import { ActiveListItem } from '../../../../types'

interface EmptyPageItemProps extends ActiveListItem {
  title: string
  IconSVG: FC
  action: () => void
}

interface StyledItemProps {
  isActive: boolean
}

export type { EmptyPageItemProps, StyledItemProps }
