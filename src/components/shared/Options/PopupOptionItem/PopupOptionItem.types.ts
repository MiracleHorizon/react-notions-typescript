import { ActiveListItem } from '../../../../types'

interface PopupOptionItemProps extends ActiveListItem {
  title: string
  icon: JSX.Element
  action: () => void
}

export type { PopupOptionItemProps }
