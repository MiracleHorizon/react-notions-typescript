import { ListItemOptions } from 'components/Workspace/Sidebar/LeftSidebar/PagesList/ListItem/ListItem.types'

const listItemOptionsTitleHandler = (isFavorite: boolean): string => {
  return isFavorite ? ListItemOptions.FAVORITE : ListItemOptions.COMMON
}

export default listItemOptionsTitleHandler
