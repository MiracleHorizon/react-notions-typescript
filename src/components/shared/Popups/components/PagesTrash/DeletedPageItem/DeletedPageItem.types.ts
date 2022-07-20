import { ActiveItemParams } from 'types'

export default interface PagesTrashItemProps extends ActiveItemParams {
  id: string
  icon: string
  title: string
  parentTitle?: string
}
