import { FC } from 'react'
import { ActiveListItem } from '../../../../../@types/types'

interface OptionItemProps extends ActiveListItem {
  title: string
  IconSVG: FC
  action: () => void
}

export type { OptionItemProps }
