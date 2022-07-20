import { FC } from 'react'
import { ActiveListItem } from 'types'
import { ElementSizes } from 'utils/coordsHandlers'

export default interface OptionItemProps extends ActiveListItem {
  title: string
  IconSvg: FC
  action: () => void
}
