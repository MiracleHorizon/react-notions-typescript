import { ItemContainerProps } from 'components/Workspace/Sidebar/LeftSidebar/PagesList/ListItem/ListItem.types'
import SidebarWrapperProps from 'components/Workspace/Sidebar/Sidebar.types'

class SidebarStylesHandler {
  public positionHandler(props: SidebarWrapperProps): string {
    const { isOpen, isBubbling, location } = props

    return !isOpen || location === 'Right' || isBubbling
      ? 'absolute'
      : 'relative'
  }

  public transformHandler(props: SidebarWrapperProps): string {
    const { isOpen, isBubbling } = props

    if (!isOpen || isBubbling) {
      return props.location === 'Left'
        ? -props.width - 10 + 'px'
        : props.width + 10 + 'px'
    } else {
      return '0px'
    }
  }

  public minWidthHandler({ isOpen, location }: SidebarWrapperProps): string {
    if (location === 'Left') {
      return !isOpen ? '0px' : '200px'
    } else {
      return !isOpen ? '0px' : '340px'
    }
  }

  public boxShadowHandler({ isBubbling }: SidebarWrapperProps): string {
    return isBubbling
      ? `rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 
      0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px`
      : 'none'
  }
}

class PagesListStylesHandler {
  itemBackgroundHandler(props: ItemContainerProps) {
    const { isSelected, isHovering, isExpanded } = props

    if ((isSelected || isHovering) && !isExpanded) {
      return 'rgba(55, 53, 47, 0.08)'
    } else if (
      (isHovering && isExpanded) ||
      (isSelected && isHovering && isExpanded)
    ) {
      return 'rgba(55, 53, 47, 0.16)'
    } else {
      return 'transparent'
    }
  }
}

const sidebarStylesHandler = new SidebarStylesHandler()
const pagesListsStylesHandler = new PagesListStylesHandler()

export { sidebarStylesHandler, pagesListsStylesHandler }
