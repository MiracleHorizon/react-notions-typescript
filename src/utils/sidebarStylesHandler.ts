import { SidebarWrapperProps } from 'components/Workspace/Sidebar/Sidebar.types'

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

const sidebarStylesHandler = new SidebarStylesHandler()

export default sidebarStylesHandler
