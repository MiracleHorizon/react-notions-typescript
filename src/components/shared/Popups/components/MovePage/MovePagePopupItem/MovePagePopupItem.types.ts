import { ActiveItemParams } from 'types'
import { IconInfo } from 'redux/types'

export default interface MovePageToModalItemProps extends ActiveItemParams {
  _id: string
  title: string
  iconInfo: IconInfo
  action: (selectedPageId: string) => void
}
