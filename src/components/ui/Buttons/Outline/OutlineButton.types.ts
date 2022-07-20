import { FC } from 'react'

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
  IconSvg?: FC
}

interface OutlineButtonProps {
  title: string
  action: () => void
  activeItem?: string
  onSelect?: (title: string) => void
  IconSvg?: FC
}

export type { OutlineButtonProps, OutlineButtonPropsStyles, StyledButtonProps }
