import { ActiveListItem } from '../../../@types/generalTypes'

interface PopupOptionItemProps extends ActiveListItem {
  title: string
  icon: JSX.Element
  action: () => void
}

export type { PopupOptionItemProps }
