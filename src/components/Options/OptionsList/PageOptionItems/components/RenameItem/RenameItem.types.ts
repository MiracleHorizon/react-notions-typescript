import { ActiveListItem } from '../../../../../../types'

export default interface RenameItemProps extends ActiveListItem {
  renameEssenceId: number
  action: () => void
}
