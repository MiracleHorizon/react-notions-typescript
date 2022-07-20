import { ActiveListItem } from 'types'

export default interface RenameItemProps extends ActiveListItem {
  renameEntityId: string
  action: () => void
}
