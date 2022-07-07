import { ActiveListItem } from '../../../../../../@types/generalTypes'

export default interface RenameItemProps extends ActiveListItem {
  renameEssenceId: number
  action: () => void
}
