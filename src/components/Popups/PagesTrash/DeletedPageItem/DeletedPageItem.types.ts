import { ActiveItemParams } from '../../../../types'

export default interface PagesTrashItemProps extends ActiveItemParams {
  id: number
  icon: string
  title: string
  parentTitle?: string
}
