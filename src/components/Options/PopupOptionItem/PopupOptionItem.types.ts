import { ActiveListItem } from '../../../@types/generalTypes'

interface PopupOptionItemProps extends ActiveListItem {
  title: string
  SVGComponent: JSX.Element
  action: () => void
}

export type { PopupOptionItemProps }
