import { ActiveItem } from 'types'

interface Params {
  activeItem: ActiveItem
  item: ActiveItem
}

const selectedItemHandler = ({ activeItem, item }: Params): boolean => {
  return activeItem.title === item.title && activeItem.id === item.id
}

export default selectedItemHandler
