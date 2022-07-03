import { ActiveListItem } from '../../../@types/types'

interface PopupOptionItemProps extends ActiveListItem {
  title: string
  SVGComponent: JSX.Element
  action: () => void
}

interface StyledContainerProps {}

export type { PopupOptionItemProps }
