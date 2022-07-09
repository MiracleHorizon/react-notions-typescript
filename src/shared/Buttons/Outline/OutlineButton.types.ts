interface OutlineButtonPropsStyles {
  background: string
  color: string
  borderColor: string
  hoverColor: string
  activeColor: string
  isActive?: boolean
}

interface StyledButtonProps extends OutlineButtonPropsStyles {
  title: string
  action: () => void
  activeItem?: string
  onSelect?: (title: string) => void
}

interface OutlineButtonProps {
  title: string
  action: () => void
  activeItem?: string
  onSelect?: (title: string) => void
}

export type { OutlineButtonProps, OutlineButtonPropsStyles, StyledButtonProps }
