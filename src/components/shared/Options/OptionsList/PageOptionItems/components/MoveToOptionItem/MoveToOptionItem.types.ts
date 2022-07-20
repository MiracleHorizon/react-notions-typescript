import { ActiveListItem } from 'types'

export default interface MoveToOptionItemProps extends ActiveListItem {
  action: () => void
}
