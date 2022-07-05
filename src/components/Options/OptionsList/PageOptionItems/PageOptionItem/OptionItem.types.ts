import { FC } from 'react'
import { ActiveListItem } from '../../../../../@types/generalTypes'

interface OptionItemProps extends ActiveListItem {
  title: string
  IconSvg: FC
  action: () => void
}

export type { OptionItemProps }
