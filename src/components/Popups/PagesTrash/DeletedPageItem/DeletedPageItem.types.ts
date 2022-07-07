import { ActiveItemParams } from '../../../../@types/generalTypes'

export default interface PagesTrashItemProps extends ActiveItemParams {
  id: number
  icon: string
  title: string
  parentTitle?: string
}
