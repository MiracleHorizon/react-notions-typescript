import { ActiveListItem } from '../../../../@types/generalTypes'

export default interface PagesTrashItemProps extends ActiveListItem {
  id: number
  icon: string
  title: string
  parentTitle?: string
}
