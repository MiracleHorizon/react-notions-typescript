import { ActiveListItem } from '../../../../../../@types/generalTypes'

export default interface MoveToOptionItemProps extends ActiveListItem {
  action: () => void
}
