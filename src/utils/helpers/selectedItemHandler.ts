import { ActiveItem } from 'shared/ModalWindows/MovePageTo/MovePageToModalItem/MovePageToModalItem.types'

interface Params {
  activeItem: ActiveItem
  item: ActiveItem
}

export const selectedItemHandler = (params: Params): boolean => {
  const { activeItem, item } = params
  return activeItem.title === item.title && activeItem.id === item.id
}
